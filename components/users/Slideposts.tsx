import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import WritingIcon from "../../assets/images/writing.svg";
import { primary2, secondary } from "../../constants/Colors";

type Props = {};

type slideritemprop = {
  item: {
    key: string;
    image: string;
    title: string;
    subtitle: string;
  };
};
export const sliderdata = [
  {
    key: "1",
    image: "../../assets/images/writing.svg",
    title: "Featured Posts",
    subtitle: "Access every of our services from the comfort of your room",
  },
  {
    key: "2",
    image: "yt",
    title: "Featured Posts",
    subtitle: "Access every of our services from the comfort of your room",
  },
];

const Slideposts = ({ item }: slideritemprop) => {
  return (
    <View style={styles.container}>
      <WritingIcon />
      <View style={styles.textcon}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default Slideposts;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: primary2,
    width: 350,
    height: 150,
    borderRadius: 10,
    padding: 13,
    marginHorizontal: 7,
    marginVertical: 21,
    gap: 10,
  },
  textcon: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "70%",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "white",
  },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "white",
    flexWrap: "wrap",
  },
});
