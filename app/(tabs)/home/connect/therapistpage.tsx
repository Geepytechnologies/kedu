import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { primary, secondary } from "../../../../constants/Colors";
import People from "../../../../assets/images/people.svg";

type Props = {};

const therapistpage = (props: Props) => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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
        <View style={{ marginTop: 6 }}>
          <Text
            style={{ fontFamily: "Poppins_400Regular", textAlign: "center" }}
          >
            Based on data from Statista, it has been observed that a significant
            proportion of email traffic on the Internet, specifically 48.16%,
            was attributed to spam emails in recent
          </Text>
          <View
            style={[
              styles.rowview,
              {
                justifyContent: "center",
                marginTop: 16,
              },
            ]}
          >
            <View style={[styles.rowview, { gap: 20 }]}>
              <View style={[styles.rowview, { gap: 4 }]}>
                <People />
                <View style={[styles.colview, {}]}>
                  <Text style={{ fontFamily: "Poppins_600SemiBold" }}>
                    345+
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins_400Regular", fontSize: 12 }}
                  >
                    Patients
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: primary,
                  borderRadius: 5,
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>Connect</Text>
              </View>
              <Text
                style={{
                  borderColor: primary,
                  borderWidth: 2,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                Message
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default therapistpage;

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
});
