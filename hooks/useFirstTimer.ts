import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

const useFirstTimer = () => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  const checkFirstTimeUser = async () => {
    try {
      // Check if the 'firstTimeUser' key exists in AsyncStorage
      const firstTimeUser = await AsyncStorage.getItem("firstTimeUser");

      if (firstTimeUser === null) {
        // Set the 'firstTimeUser' key in AsyncStorage
        await AsyncStorage.setItem("firstTimeUser", "false");
        setIsFirstTimeUser(true);
        console.log(
          "Welcome! This is the first time the user is using the app."
        );
      } else {
        setIsFirstTimeUser(false);
        console.log("Welcome back!");
      }
    } catch (error) {
      console.error("Error checking first-time user status:", error);
    }
  };

  useEffect(() => {
    checkFirstTimeUser();
  }, []);

  return { isFirstTimeUser };
};

export default useFirstTimer;
