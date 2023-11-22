import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { primary2, secondary, turquoise } from "../../../../constants/Colors";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

type Props = {};

export const Profilecon = () => (
  <View style={styles.profilecon}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Image
        style={styles.img}
        source={require("../../../../assets/images/femaledoctor.jpg")}
      />
      <View style={styles.namecon}>
        <Text>Dr. Maria Roberts</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome name="star" size={20} color={secondary} />
          <FontAwesome name="star" size={20} color={secondary} />
          <FontAwesome name="star" size={20} color={secondary} />
          <FontAwesome name="star" size={20} color={secondary} />
          <FontAwesome name="star-half-o" size={20} color={secondary} />
        </View>
      </View>
    </View>
    <View style={styles.buttoncon}>
      <Text style={styles.btn1}>Connect</Text>
      <Text style={styles.btn2}>Cancel</Text>
    </View>
  </View>
);
const index = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.connectcon}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        <View>
          <Text style={styles.connect}>Connect</Text>
          <Text style={styles.find}>Find Therapists</Text>
        </View>
      </Pressable>
      <View style={styles.inputcontainer}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={styles.inputcon}
          placeholder="What are you looking for?"
          placeholderTextColor={"#BDBDBD"}
        />
        <Feather name="sliders" size={24} color="black" />
      </View>
      <View style={styles.suggestioncon}>
        <View style={styles.headercon}>
          <Text style={styles.find}>Suggested for you</Text>
          <Pressable
            onPress={() => router.push("/(tabs)/home/connect/nearbytherapists")}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text>Nearby Therapist</Text>
              <Feather name="arrow-right-circle" size={18} color="black" />
            </View>
          </Pressable>
        </View>
        <Profilecon />
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    backgroundColor: "white",
  },
  connectcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 15,
    marginTop: 30,
  },
  connect: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    color: "#000",
  },
  find: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#000",
  },
  inputcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 6,
    gap: 5,
  },
  inputcon: {
    color: "black",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    flex: 1,
  },
  suggestioncon: {
    paddingTop: 15,
    marginTop: 40,
    borderTopColor: "#E0E0E0",
    borderTopWidth: 0.5,
  },

  headercon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 27,
  },
  profilecon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 52,
    height: 52,
    borderRadius: 50,
  },
  namecon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },
  buttoncon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  btn1: {
    backgroundColor: primary2,
    color: "white",
    padding: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    borderRadius: 2,
  },
  btn2: {
    backgroundColor: turquoise,
    color: "white",
    padding: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    borderRadius: 2,
  },
});
