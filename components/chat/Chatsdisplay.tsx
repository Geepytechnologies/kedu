import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {};

const Chatsdisplay = (props: Props) => {
  return (
    <Pressable
      onPress={() => router.push("/(tabs)/profile/chat/room")}
      style={[styles.rowview, { gap: 12 }]}
    >
      <Image
        style={[styles.image]}
        source={{ uri: "https://shorturl.at/htOUW" }}
      />
      <View
        style={[
          styles.rowview,
          {
            alignItems: "flex-start",
            justifyContent: "space-between",
            flex: 1,
            borderBottomWidth: 1,
            borderColor: "#D0D0D0",
            paddingVertical: 14,
          },
        ]}
      >
        <View>
          <Text style={styles.name}>Alison Kim</Text>
          <View style={[styles.rowview]}>
            <Ionicons name="checkmark-done" size={16} color="black" />
            <Text style={styles.lastmessage}>Thank you</Text>
          </View>
        </View>
        <View>
          <Text>Yesterday</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Chatsdisplay;

const styles = StyleSheet.create({
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  name: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    lineHeight: 22,
  },
  lastmessage: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 18,
  },
});
