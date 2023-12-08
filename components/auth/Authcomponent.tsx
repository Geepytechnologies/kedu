import React from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { router, useSegments } from "expo-router";

type Props = {
  children: React.ReactNode;
};

const Authcomponent = ({ children }: Props) => {
  const { isAuthenticated } = useAuthentication();
  const segments = useSegments();
  const authGroup = segments[0] === "(auth)";
  if (!isAuthenticated && !authGroup) {
    router.replace("/(auth)/login");
  }
  if (isAuthenticated && authGroup) {
    router.replace("/");
  }
  return <>{children}</>;
};

export default Authcomponent;
