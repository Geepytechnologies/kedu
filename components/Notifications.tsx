import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { primary, primary2 } from "../constants/Colors";

const Notifications = () => {
  const Notification = () => {
    return (
      <View style={styles.notecon}>
        <View
          style={{
            display: "flex",
            gap: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ position: "relative" }}>
            <Image
              style={styles.image}
              source={require("../assets/images/profileimg.png")}
            />
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 50,
                position: "absolute",
                bottom: 1,
                right: 1,
                backgroundColor: "#35CC75",
              }}
            ></View>
          </View>
          <View style={[styles.columnview]}>
            <Text
              style={{
                fontFamily: "Roboto_500Medium",
                lineHeight: 13,
                fontSize: 12,
              }}
            >
              Maria Morgan
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                lineHeight: 13,
                fontSize: 10,
              }}
            >
              Hello Maria, book an appointment...
            </Text>
          </View>
        </View>
        <View style={[styles.columnview]}>
          <Text
            style={{
              fontFamily: "Roboto_400Regular",
              color: "#BDBDBD",
            }}
          >
            02:30
          </Text>
          <Ionicons
            style={{ marginLeft: "auto" }}
            name="md-checkmark-done"
            size={10}
            color={primary2}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{ padding: 15 }}>
      <View style={styles.notifytab}>
        <View style={styles.notifications}>
          <Text style={styles.notificationText}>Notifications</Text>
          <View style={styles.notificationNumber}>
            <Text style={{ color: "#fff" }}>2</Text>
          </View>
        </View>
        <Text style={styles.reminder}>Set Reminder</Text>
      </View>
      <Notification />
    </View>
  );
};

const styles = StyleSheet.create({
  notifytab: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notifications: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  notificationNumber: {
    width: 20,
    height: 20,
    backgroundColor: "#99E6B2",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationText: {
    color: "#000000",
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
  },
  reminder: {
    color: "#008080",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  notecon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#F0FAFD",
    padding: 12,
    borderRadius: 5,
  },
  columnview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: 31,
    height: 31,
    borderRadius: 50,
  },
});

export default Notifications;
