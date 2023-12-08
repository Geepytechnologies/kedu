import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SIGNIN } from "../utils/redux/slices/userSlice";
import { AUTHENTICATE } from "../utils/redux/slices/authSlice";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase/supabase";
import { useSegments } from "expo-router";

export const useAuthentication = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state: any) => state.authSlice);

  const authenticate = async () => {
    try {
      setLoading(true);
      if (!session?.user) {
        dispatch(SIGNIN(null));
        dispatch(AUTHENTICATE(false));
      }

      // const { data, error, status } = await supabase
      //   .from("profiles")
      //   .select("*")
      //   .eq("id", session?.user.id)
      //   .single();
      if (session && session.user) {
        dispatch(SIGNIN(session.user));
        dispatch(AUTHENTICATE(true));
      }
      // if (error && status !== 406) {
      //   throw error;
      // }
    } catch (error) {
      dispatch(SIGNIN(null));
      dispatch(AUTHENTICATE(false));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  useEffect(() => {
    if (session) {
      authenticate();
    }
  }, [session]);

  return { isAuthenticated };
};
