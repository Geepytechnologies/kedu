import React, { useEffect, useState } from "react";
import { router, useSegments } from "expo-router";
import useFirstTimer from "../../hooks/useFirstTimer";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../../utils/supabase/supabase";
import { Session } from "@supabase/supabase-js";
import { SIGNIN } from "../../utils/redux/slices/userSlice";
import { AUTHENTICATE } from "../../utils/redux/slices/authSlice";

type Props = {
  children: React.ReactNode;
};

const Authcomponent = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [sessionloaded, setSessionloaded] = useState(false);
  const [usersession, setUsersession] = useState<Session | null>(null);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: any) => state.authSlice);

  const { isFirstTimeUser } = useFirstTimer();
  const segments = useSegments();
  const authGroup = segments[0] === "(auth)";

  const authenticate = async (session: Session | null) => {
    try {
      setLoading(true);
      if (!session?.user) {
        setSessionloaded(true);
        dispatch(SIGNIN(null));
        // dispatch(AUTHENTICATE(false));
      }

      if (session && session.user) {
        setSessionloaded(true);
        dispatch(SIGNIN(session.user));
        dispatch(AUTHENTICATE(true));
      }
    } catch (error) {
      dispatch(SIGNIN(null));
      //   dispatch(AUTHENTICATE(false));
    } finally {
      setLoading(false);
      setSessionloaded(false);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUsersession(session);
      authenticate(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUsersession(session);

      authenticate(session);
    });
  }, []);

  useEffect(() => {
    if (!isAuthenticated && !authGroup && isFirstTimeUser && sessionloaded) {
      router.replace("/(auth)/chooseauth");
    }
    if (!isAuthenticated && !authGroup && !isFirstTimeUser && sessionloaded) {
      router.replace("/(auth)/login");
    }
    if (
      isAuthenticated &&
      (authGroup || segments[0] == undefined) &&
      sessionloaded
    ) {
      router.replace("/(tabs)/home");
    }
    if (
      isAuthenticated &&
      isFirstTimeUser &&
      sessionloaded &&
      (authGroup || segments[0] == undefined)
    ) {
      router.replace("/homepage");
    }
  }, [isAuthenticated, segments, sessionloaded]);

  return <>{children}</>;
};

export default Authcomponent;
