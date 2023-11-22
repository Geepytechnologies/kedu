import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { secondary } from "../constants/Colors";
import { router } from "expo-router";

interface Doctor {
  id: string;
  image: string;
  name: string;
  healthcentre: string;
  rating: number;
  reviews: number;
}

type Props = {
  item: Doctor;
};

const Doctorprofilecard = ({ item }: Props) => {
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/(tabs)/home/connect/therapistpage",
          params: { id: item.id },
        })
      }
      style={styles.container}
    >
      <Image
        source={require("../assets/images/user1.jpg")}
        style={styles.imgcon}
      />
      <View style={styles.con2}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.healthcentre}>{item.healthcentre}</Text>
        <View style={[styles.ratings, { gap: 10 }]}>
          <View style={[styles.ratings, { gap: 2 }]}>
            <FontAwesome name="star" size={24} color={secondary} />
            <Text style={styles.healthcentre}>{item.rating}</Text>
          </View>
          <Text style={styles.healthcentre}>({item.reviews} reviews)</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Doctorprofilecard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    marginBottom: 18,
  },
  con2: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  imgcon: {
    width: 125,
    height: 125,
    borderRadius: 8,
  },
  name: {
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 22,
  },
  healthcentre: {
    fontFamily: "Poppins_400Regular",
    lineHeight: 22,
  },
  ratings: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
