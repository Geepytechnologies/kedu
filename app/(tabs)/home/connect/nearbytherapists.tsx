import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { Profilecon } from ".";
import FeaturedPosts from "../../../../components/FeaturedPosts";
import Doctorprofilecard from "../../../../components/Doctorprofilecard";
import { SafeAreaView } from "react-native-safe-area-context";

interface Doctor {
  id: string;
  image: string;
  name: string;
  healthcentre: string;
  rating: number;
  reviews: number;
}
const doctorsData: Doctor[] = [
  {
    id: "1",
    image: "Image1.jpg",
    name: "DR John Doe",
    healthcentre: "Alpha Health Centre",
    rating: 4.5,
    reviews: 25,
  },
  {
    id: "2",
    image: "Image2.jpg",
    name: "DR Jane Smith",
    healthcentre: "Beta Health Centre",
    rating: 3.8,
    reviews: 15,
  },
  {
    id: "3",
    image: "Image3.jpg",
    name: "DR Bob Johnson",
    healthcentre: "Gamma Health Centre",
    rating: 4.2,
    reviews: 30,
  },
];

const nearbytherapists = () => {
  const flatListRef = useRef<FlatList | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.connectcon}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        <View>
          <Text style={styles.connect}>Connect</Text>
          <Text style={styles.find}>Nearby Therapists</Text>
        </View>
      </Pressable>
      <FeaturedPosts />
      <View
        style={[
          styles.rowview,
          { justifyContent: "space-between", marginTop: 20, marginBottom: 30 },
        ]}
      >
        <Text style={styles.seemore}>Nearby Therapists</Text>
        <Text style={styles.seemore}>See more</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={doctorsData}
        renderItem={Doctorprofilecard}
        horizontal={false}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
  },
  connectcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 15,
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
  seemore: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    lineHeight: 20,
    color: "#000",
  },
  rowview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default nearbytherapists;
