import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { primary, primary2 } from "../../constants/Colors";

import Topleft from "../../assets/images/wavytopleft.svg";
import Topright from "../../assets/images/topright.svg";
import Bottomleft from "../../assets/images/bottomleft.svg";
import Bottomright from "../../assets/images/bottomright.svg";
import { Link } from "expo-router";

type Props = {};

const selectprofile = (props: Props) => {
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
        <View style={styles.content}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Link href="/doctor/auth/accountcreated">
              <View style={styles.imgcon}>
                <Image
                  source={require("../../assets/images/femaledoctor.jpg")}
                  style={styles.doctorimg}
                />
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    color: primary2,
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Doctor
                </Text>
              </View>
            </Link>
            <Link href="/patient/auth">
              <View style={styles.imgcon}>
                <Image
                  source={require("../../assets/images/patient.jpg")}
                  style={styles.doctorimg}
                />
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    color: primary2,
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Patient
                </Text>
              </View>
            </Link>
          </View>
        </View>
        {/* bottom modal */}
        <View style={styles.modalcon}>
          <Text style={styles.signupoption}>Sign up option</Text>

          <Text style={styles.subtext}>
            Sign in either as a doctor or a patient. Before you can register as
            a doctor see the requirements{" "}
            <Link style={{ color: "#54C8EA", fontStyle: "italic" }} href={"/"}>
              here.
            </Link>
          </Text>
          <View style={styles.navcon}>
            <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <View style={styles.activebar}></View>
              <View style={styles.nonactivebar}></View>
              <View style={styles.nonactivebar}></View>
              <View style={styles.nonactivebar}></View>
            </View>
            <Link style={styles.nextbtn} href={"/(tabs)/home/"}>
              Next
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default selectprofile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary2,
    flex: 1,
    position: "relative",
  },
  container2: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  subtext: {
    color: "#333",
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },
  imgcon: {
    backgroundColor: "white",
    width: 120,
    height: 120,
    borderRadius: 5,
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  doctorimg: {
    width: 40,
    height: 40,
    borderRadius: 50,
    objectFit: "cover",
  },
  modalcon: {
    backgroundColor: "white",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 280,
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  signupoption: {
    color: "#000000CC",
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
  },
  nonactivebar: {
    borderWidth: 1,
    borderColor: "#54C8EA",
    width: 14,
    height: 14,
    borderRadius: 50,
  },
  activebar: {
    backgroundColor: "#54C8EA",
    width: 14,
    height: 14,
    borderRadius: 50,
  },
  navcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 69,
  },
  nextbtn: {
    backgroundColor: primary2,
    color: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    width: 94,
    textAlign: "center",
    borderRadius: 5,
  },
});
