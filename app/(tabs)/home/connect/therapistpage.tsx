import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams } from "expo-router";
import People from "../../../../assets/images/people.svg";
import { primary, secondary } from "../../../../constants/Colors";
import Doctorprofilecard from "../../../../components/Doctorprofilecard";
import { doctorsData } from "../../home/connect/nearbytherapists";
import Postcard, { Post } from "../../../../components/Postcard";

type Props = {};

const postdata: Post[] = [
  {
    id: "1",
    image: "https://shorturl.at/chpFS",
    title: "Cardiology and workout?",
    message:
      "Although approximately 86% of practicing cardiologists surveyed see patients who are workout ever...",
  },
  {
    id: "2",
    image: "https://shorturl.at/chpFS",
    title: "Cardiology and workout?",
    message:
      "Although approximately 86% of practicing cardiologists surveyed see patients who are workout ever...",
  },
];

const Therapistheader = (props: Props) => {
  const [viewoption, setViewoption] = useState("posts");
  const { id } = useLocalSearchParams();

  const media = [
    {
      id: "1",
      imgurl: "https://shorturl.at/chpFS",
    },
    {
      id: "2",
      imgurl: "https://shorturl.at/chpFS",
    },
    {
      id: "3",
      imgurl: "https://shorturl.at/chpFS",
    },
  ];

  const handleSelect = (option: string) => {
    setViewoption(option);
  };
  const TherapistHeader = () => {
    return (
      <View style={{ marginBottom: 15 }}>
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
              <Link
                href={"/(tabs)/profile/chat/room"}
                suppressHighlighting
                style={{
                  borderColor: primary,
                  borderWidth: 2,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                Message
              </Link>
            </View>
          </View>
        </View>
        {/* posts and message */}
        <View style={[styles.rowview, { marginTop: 50 }]}>
          <View
            style={[
              styles.rowview,
              {
                width: "100%",
                justifyContent: "space-between",
              },
            ]}
          >
            <Pressable onPress={() => handleSelect("posts")}>
              <Text
                style={
                  viewoption == "posts"
                    ? styles.activeselection
                    : styles.inactiveselection
                }
              >
                Posts
              </Text>
            </Pressable>
            <Pressable onPress={() => handleSelect("media")}>
              <Text
                style={
                  viewoption == "media"
                    ? styles.activeselection
                    : styles.inactiveselection
                }
              >
                Media
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {viewoption == "posts" && (
          <View>
            <FlatList
              data={postdata}
              renderItem={Postcard}
              horizontal={false}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={TherapistHeader}
            />
          </View>
        )}
        {viewoption == "media" && (
          <View>
            <FlatList
              data={media}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item.imgurl }}
                  style={{
                    flex: 1,
                    aspectRatio: 1,
                    maxWidth: "32%",
                    margin: 2,
                  }}
                />
              )}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={TherapistHeader}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Therapistheader;

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
  activeselection: {
    backgroundColor: "#99E6B2",
    borderRadius: 5,
    paddingVertical: 10,
    minWidth: "45%",
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  inactiveselection: {
    backgroundColor: "#F0FAFD",
    paddingVertical: 10,
    minWidth: "45%",
    borderRadius: 5,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
});
