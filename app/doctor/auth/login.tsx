import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { primary, primary2 } from "../../../constants/Colors";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Googlelogo from "../../../assets/images/googlelogo.svg";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const login = (props: Props) => {
  return (
    <View style={styles.container}>
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
            placeholder="user@gmail.com"
            placeholderTextColor={primary2}
            style={styles.inputbox}
          />
        </View>
        <View>
          <Text style={styles.logintext}>Password</Text>
          <TextInput
            placeholder="********"
            secureTextEntry={true}
            placeholderTextColor={primary2}
            style={styles.inputbox}
          />
        </View>
        <Text style={styles.submitbtn}>Submit</Text>
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
              <Link href="/doctor/auth/signup">Sign up</Link>
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
  inputbox: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: primary2,
  },
  submitbtn: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    color: "white",
    backgroundColor: primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: "center",
    borderRadius: 5,
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
