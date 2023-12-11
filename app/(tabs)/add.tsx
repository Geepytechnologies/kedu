import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { primary, primary2, primary3, primary4 } from "../../constants/Colors";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";

type Props = {};

const add = (props: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: primary4,
      }}
    >
      <StatusBar barStyle={"dark-content"} backgroundColor={primary4} />
      <ScrollView
        contentContainerStyle={{ justifyContent: "center" }}
        style={styles.container}
      >
        <View
          style={[
            styles.rowview,
            {
              justifyContent: "space-between",
              marginBottom: 40,
              marginTop: 20,
            },
          ]}
        >
          <Pressable onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </Pressable>
          <Text
            style={{
              fontFamily: "Roboto_400Regular",
              fontSize: 17,
              color: "#fff",
            }}
          >
            Meditation music
          </Text>
          <Pressable onPress={() => router.back()}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </Pressable>
        </View>
        <View style={[styles.rowview, { justifyContent: "center" }]}>
          <Image
            source={{ uri: "https://shorturl.at/htOUW" }}
            style={styles.audioimage}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.artiste}>Asap Rocky</Text>
          <Text style={styles.songname}>Ultrasonic Soul Sound</Text>
        </View>
        {/* time slider */}
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <View style={{ backgroundColor: "#E0E0E080", height: 3 }}></View>
          <View
            style={[
              styles.rowview,
              { justifyContent: "space-between", marginTop: 10 },
            ]}
          >
            <Text style={styles.time}>01:22</Text>
            <Text style={styles.time}>03:48</Text>
          </View>
        </View>
        {/* controls */}
        <View
          style={[
            styles.rowview,
            {
              justifyContent: "space-between",
              marginBottom: Platform.OS === "android" ? 90 : 0,
            },
          ]}
        >
          <Feather name="repeat" size={24} color="white" />
          <Ionicons name="play-skip-back" size={24} color="white" />
          <Pressable
            style={{
              backgroundColor: "#fff",
              borderRadius: 50,
              height: 46,
              width: 46,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="play" size={24} color="black" />
          </Pressable>
          <Ionicons name="play-skip-forward" size={24} color="white" />
          <Ionicons name="heart" size={24} color="white" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default add;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // paddingBottom: Platform.OS === "android" ? 200 : 0,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: primary,
    flex: 1,
  },
  connectcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 40,
  },
  rowview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  colview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  audioimage: {
    width: 360,
    height: 360,
    borderRadius: 15,
  },
  artiste: {
    color: "#FFF",
    letterSpacing: -0.17,
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },
  songname: {
    color: "#FFF",
    letterSpacing: -0.24,
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
  },
  time: {
    color: "#FFF",
    letterSpacing: -0.13,
    fontFamily: "Roboto_400Regular",
    fontSize: 13,
  },
});
