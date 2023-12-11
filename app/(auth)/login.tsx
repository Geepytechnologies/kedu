import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { primary, primary2, primary3 } from "../../constants/Colors";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Googlelogo from "../../assets/images/googlelogo.svg";
import { supabase } from "../../utils/supabase/supabase";
import { useDispatch } from "react-redux";
import { AUTHENTICATE } from "../../utils/redux/slices/authSlice";
import { SIGNIN } from "../../utils/redux/slices/userSlice";
import { usePushNotifications } from "../../hooks/usePushNotifications";
import { StatusBar } from "expo-status-bar";

type Props = {};

const login = (props: Props) => {
  const { sendPushNotification } = usePushNotifications();
  const [userdetails, setUserdetails] = useState({ email: "", password: "" });
  const [error, setError] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEmailChange = (text: string) => {
    setError({ status: false, message: "" });
    setUserdetails({ ...userdetails, email: text });
  };

  const handlePasswordChange = (text: string) => {
    setError({ status: false, message: "" });

    setUserdetails({ ...userdetails, password: text });
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userdetails.email,
        password: userdetails.password,
      });
      if (data && data.user) {
        dispatch(AUTHENTICATE(true));
        dispatch(SIGNIN(data.user));
        const username = data?.user.user_metadata.firstname;
        sendPushNotification(`Hello ${username}`, "Welcome back to Kedu", {});
      }
    } catch (error) {
      if (error) {
        setLoading(false);

        // setError({ status: true, message: error?.response?.data });
      }
    } finally {
      setLoading(false);
    }
  };
  const handlePress = async () => {
    await handleSignIn();
  };
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} backgroundColor={primary3} />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <FontAwesome name="angle-left" size={30} color="white" />
        </Pressable>
        <Text style={styles.logintext}>Login</Text>
      </View>
      <View style={{ display: "flex", gap: 20, marginTop: 50 }}>
        <View>
          <Text style={styles.logintext}>Email</Text>
          <TextInput
            onChangeText={(text) => handleEmailChange(text)}
            placeholder="user@gmail.com"
            placeholderTextColor={primary2}
            style={styles.emailbox}
          />
        </View>
        <View>
          <Text style={styles.logintext}>Password</Text>
          <View style={[styles.inputcon]}>
            <TextInput
              onChangeText={(text) => handlePasswordChange(text)}
              placeholder="********"
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor={primary2}
              style={styles.inputbox}
            />
            <Pressable onPress={togglePasswordVisibility}>
              <Ionicons
                style={{ fontSize: 20 }}
                name={isPasswordVisible ? "eye" : "eye-off"}
              />
            </Pressable>
          </View>
        </View>
        <Pressable onPress={handlePress} style={styles.submitbtn}>
          {loading ? (
            <ActivityIndicator size={"large"} color={"white"} />
          ) : (
            <Text style={styles.submitbtntext}>Submit</Text>
          )}
        </Pressable>
        <View style={{ display: "flex", gap: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              alignSelf: "center",
            }}
          >
            <Text style={styles.dont}>Don&apos;t have an account?</Text>
            <Text style={styles.signup}>
              <Link href="/(auth)/signup">Sign up</Link>
            </Text>
          </View>
          <Text style={styles.continue}>or continue with</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <FontAwesome5 name="facebook" size={24} color="white" />
            <Ionicons name="md-logo-apple" size={24} color="white" />
            <Googlelogo width={24} height={24} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary2,
    flex: 1,
    padding: 30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
  },
  logintext: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    color: "white",
  },
  inputcon: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    gap: 5,
  },
  emailbox: {
    backgroundColor: "white",
    color: primary2,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  inputbox: {
    backgroundColor: "transparent",
    color: primary2,
    flex: 1,
  },
  submitbtn: {
    backgroundColor: primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  submitbtntext: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    color: "white",
    textAlign: "center",
  },
  dont: {
    color: "white",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
  signup: {
    color: "#D5F5FF",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    fontStyle: "italic",
    height: "100%",
  },
  continue: {
    color: "white",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
});
