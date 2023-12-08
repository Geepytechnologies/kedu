import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Googlelogo from "../../assets/images/googlelogo.svg";
import { router } from "expo-router";
import { primary, primary2 } from "../../constants/Colors";
import { supabase } from "../../utils/supabase/supabase";

type Props = {};

const signup = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const [userdetails, setUserdetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleFirstnameChange = (text: string) => {
    setUserdetails({ ...userdetails, firstname: text });
  };
  const handleLastnameChange = (text: string) => {
    setUserdetails({ ...userdetails, lastname: text });
  };
  const handleEmailChange = (text: string) => {
    setUserdetails({ ...userdetails, email: text });
  };
  const handlePhoneChange = (text: string) => {
    setUserdetails({ ...userdetails, phone: text });
  };

  const handlePasswordChange = (text: string) => {
    setUserdetails({ ...userdetails, password: text });
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userdetails.email,
        password: userdetails.password,
        phone: userdetails.phone,
        options: {
          data: {
            firstname: userdetails.firstname,
            lastname: userdetails.lastname,
          },
        },
      });
      console.log(data.user);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <FontAwesome name="angle-left" size={30} color="white" />
        </Pressable>
        <Text style={styles.logintext}>Sign up</Text>
      </View>
      <View style={{ display: "flex", gap: 20, marginTop: 50 }}>
        <View>
          <Text style={styles.logintext}>First Name</Text>
          <TextInput
            onChangeText={(text) => handleFirstnameChange(text)}
            placeholder="John Doe"
            placeholderTextColor={primary2}
            style={styles.inputbox}
          />
        </View>
        <View>
          <Text style={styles.logintext}>Last Name</Text>
          <TextInput
            onChangeText={(text) => handleLastnameChange(text)}
            placeholder="John Doe"
            placeholderTextColor={primary2}
            style={styles.inputbox}
          />
        </View>
        <View>
          <Text style={styles.logintext}>Email</Text>
          <TextInput
            onChangeText={(text) => handleEmailChange(text)}
            placeholder="Enter your email"
            keyboardType="default"
            placeholderTextColor={primary2}
            style={styles.inputbox}
          />
        </View>
        <View>
          <Text style={styles.logintext}>Phone</Text>
          <TextInput
            onChangeText={(text) => handlePhoneChange(text)}
            placeholder="070-000-000-000"
            keyboardType="phone-pad"
            placeholderTextColor={primary2}
            style={styles.inputbox}
          />
        </View>
        <View>
          <Text style={styles.logintext}>Password</Text>
          <TextInput
            onChangeText={(text) => handlePasswordChange(text)}
            placeholder="********"
            secureTextEntry={true}
            placeholderTextColor={primary2}
            style={styles.inputbox}
          />
        </View>
        <Pressable onPress={handleSignUp} style={styles.submitbtn}>
          {loading ? (
            <ActivityIndicator size={"large"} color={"white"} />
          ) : (
            <Text style={styles.submitbtn}>Submit</Text>
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
              <Link href="/(auth)/login">login</Link>
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
    </ScrollView>
  );
};

export default signup;

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
