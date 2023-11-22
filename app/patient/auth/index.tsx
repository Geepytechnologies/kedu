import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { primary, primary2 } from "../../../constants/Colors";
import Logo from "../../../components/svgs/Logo";
import Textlogo from "../../../components/svgs/Textlogo";
import Topleft from "../../../assets/images/wavytopleft.svg";
import Topright from "../../../assets/images/topright.svg";
import Bottomleft from "../../../assets/images/bottomleft.svg";
import Bottomright from "../../../assets/images/bottomright.svg";
import { Link } from "expo-router";
type Props = {};

const index = (props: Props) => {
  return (
    <View style={styles.container}>
      <Topleft style={{ opacity: 0.4 }} />
      <Topright
        style={{ opacity: 0.4, position: "absolute", top: 0, right: 0 }}
      />
      <Bottomleft
        style={{ opacity: 0.4, position: "absolute", bottom: 0, left: 0 }}
      />
      <Bottomright
        style={{ opacity: 0.4, position: "absolute", bottom: 0, right: 0 }}
      />
      <View style={styles.container2}>
        <View style={styles.logocon}>
          <Logo width={46} height={46} />
          <Textlogo width={116} height={52} />
        </View>

        <View
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Link href={"/patient/auth/login"} style={styles.login}>
            Login
          </Link>
          <Link href={"/patient/auth/signup"} style={styles.signup}>
            Sign up
          </Link>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary2,
    flex: 1,
    position: "relative",
  },
  container2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  logocon: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    marginBottom: 40,
  },
  login: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: "#fff",
    color: primary2,
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    borderRadius: 5,
    minWidth: 325,
  },
  signup: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: primary,
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    borderRadius: 5,
    minWidth: 325,
  },
});
