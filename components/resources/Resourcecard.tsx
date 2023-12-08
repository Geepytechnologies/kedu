import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const Resourcecard = (props: Props) => {
  return (
    <Link
      href={"/(tabs)/profile/myresources/resourcedetail"}
      suppressHighlighting
    >
      <View style={{ marginRight: 10, position: "relative", width: 300 }}>
        <Image
          style={styles.image}
          source={{ uri: "https://shorturl.at/bepqL" }}
        />
        <View style={styles.darkbg}></View>
        <View style={styles.content}>
          <Text style={styles.title}>Essential Yoga Flows for Every Day</Text>
          <Text style={styles.subtitle}>6 Workouts - All Levels</Text>
        </View>
      </View>
    </Link>
  );
};

export default Resourcecard;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 180,
  },
  title: {
    fontSize: 22,
    lineHeight: 24,
    fontFamily: "WorkSans_500Medium",
    color: "#fff",
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: "WorkSans_500Medium",
    color: "#fff",
  },
  content: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    padding: 15,
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
  },
  darkbg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.25,
  },
});
