import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

export interface Post {
  id: string;
  image: string;
  title: string;
  message: string;
}

type Props = {
  item: Post;
};

const Postcard = ({ item }: Props) => {
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/(tabs)/home/connect/therapistpost",
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
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </Pressable>
  );
};

export default Postcard;

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
  title: {
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 22,
  },
  message: {
    fontFamily: "Poppins_400Regular",
    lineHeight: 22,
  },
});
