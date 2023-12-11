import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SIGNIN } from "../utils/redux/slices/userSlice";
import { AUTHENTICATE } from "../utils/redux/slices/authSlice";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase/supabase";
import { useSegments } from "expo-router";

export const useAuthentication = () => {
  // const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state: any) => state.authSlice);

  const authenticate = async (session: Session | null) => {
    try {
      setLoading(true);
      if (!session?.user) {
        dispatch(SIGNIN(null));
        dispatch(AUTHENTICATE(false));
      }

      if (session && session.user) {
        console.log("just received");
        dispatch(SIGNIN(session.user));
        dispatch(AUTHENTICATE(true));
      }
    } catch (error) {
      dispatch(SIGNIN(null));
      dispatch(AUTHENTICATE(false));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      authenticate(session);
      // setSession(session)
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      authenticate(session);
      // setSession(session);
    });
  }, []);

  // useEffect(() => {
  //   if (session) {
  //     authenticate();
  //     console.log("there is a session");
  //   }
  // }, [session]);
  console.log(isAuthenticated);
  return { isAuthenticated, loading };
};
