import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { secondary } from "../../../../constants/Colors";
import { router } from "expo-router";

type Props = {};

const therapistpost = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </Pressable>
        <View style={[styles.colview, { gap: 10, alignItems: "center" }]}>
          <View style={[styles.image, { position: "relative" }]}>
            <Image
              style={[styles.image, { borderRadius: 50 }]}
              source={require("../../../../assets/images/profileimg.png")}
            />
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 50,
                position: "absolute",
                bottom: 2,
                right: 3,
                backgroundColor: "#35CC75",
              }}
            ></View>
          </View>
          <View style={[styles.colview, { alignItems: "center" }]}>
            <Text style={styles.name}>Dr. Maria Roberts</Text>
            <View style={[styles.rowview, { gap: 15 }]}>
              <Text>Physiotherapist</Text>
              <View style={[styles.rowview, { gap: 3 }]}>
                <FontAwesome name="star" size={20} color={secondary} />
                <Text style={styles.name}>4.78/5</Text>
              </View>
            </View>
          </View>
          <View style={styles.hr}></View>
        </View>
        <View style={{ gap: 20, marginTop: 20 }}>
          <Text style={styles.title}>Cardiology and Workout</Text>
          <View style={styles.dash}></View>
          <Image
            style={[styles.contentimage, { borderRadius: 20 }]}
            source={require("../../../../assets/images/cardiology.jpg")}
          />
          <Text style={styles.message}>
            Regular workouts are essential for robust cardiovascular health.
            Engaging in cardio exercises like running, cycling, or brisk walking
            strengthens the heart, improves blood circulation, and lowers the
            risk of heart diseases. Prioritize your heart's well-being with a
            balanced fitness routine for a healthier, longer life.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default therapistpost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 15,
    backgroundColor: "#fff",
  },
  image: {
    width: 70,
    height: 70,
  },
  contentimage: {
    width: "100%",
    height: 300,
  },
  rowview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  hr: {
    backgroundColor: "#E0E0E0",
    height: 0.5,
    width: "100%",
  },
  colview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    color: "#333333",
    fontFamily: "Poppins_500Medium",
  },
  title: {
    color: "#333333",
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    lineHeight: 23,
    textAlign: "center",
  },
  dash: {
    width: 68,
    height: 2,
    backgroundColor: "#333333",
    alignSelf: "center",
  },
  message: {
    color: "#333333",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
});
