import { Image, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { primary, primary2, primary3 } from "../constants/Colors";
import Logo from "../components/svgs/Logo";
import Textlogo from "../components/svgs/Textlogo";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

type Props = {};

const index = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <View style={styles.logocon}>
        <Logo width={25} height={25} />
        <Textlogo width={63} height={28} />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/images/youngboy2.png")}
      />
      <Text style={styles.username}>kedu Andrew</Text>
      <Text style={styles.message}>
        Your mind is your greatest asset give it the best of care with our
        platform
      </Text>
      <View style={styles.navcon}>
        <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <View style={styles.nonactivebar}></View>
          <View style={styles.nonactivebar}></View>
          <View style={styles.nonactivebar}></View>
          <View style={styles.activebar}></View>
        </View>
        <Link href={"/selectprofile"}>
          <View style={styles.arrow}>
            <Feather name="arrow-right" size={24} color="#333333" />
          </View>
        </Link>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary2,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  logocon: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    marginBottom: 40,
  },
  image: {
    width: 342,
    height: 309,
    resizeMode: "contain",
  },
  username: {
    fontWeight: "500",
    fontFamily: "Poppins_500Medium",
    color: "white",
    fontSize: 32,
  },
  message: {
    fontFamily: "Poppins_400Regular",
    color: "white",
    fontSize: 15,
  },
  arrow: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 62,
    width: 62,
    alignItems: "center",
    justifyContent: "center",
  },
  nonactivebar: {
    backgroundColor: "#BDBDBD",
    width: 4,
    height: 4,
    opacity: 0.3,
    borderRadius: 50,
  },
  activebar: {
    backgroundColor: "white",
    width: 21,
    height: 4,
    borderRadius: 5,
  },
  navcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 69,
  },
});
