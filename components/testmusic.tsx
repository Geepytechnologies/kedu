import React from "react";
import { FlatList, View, Text, StyleSheet, Dimensions } from "react-native";

const data = [
  { id: "1", title: "Card 1" },
  { id: "2", title: "Card 2" },
  { id: "3", title: "Card 3" },
  { id: "4", title: "Card 4" },
  { id: "5", title: "Card 5" },
  // Add more data as needed
];

const screenWidth = Dimensions.get("window").width;

const renderItem = ({ item, index }: any) => {
  // Calculate scale based on the distance from the center
  const scale = 1 - Math.abs((index - data.length / 2) / data.length);
  const cardWidth = screenWidth * 0.8; // Set your desired card width

  return (
    <View style={[styles.card, { transform: [{ scale }] }]}>
      <Text>{item.title}</Text>
    </View>
  );
};

const CenteredCardFlatList = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={styles.flatListContainer}
      snapToInterval={screenWidth * 0.8} // Set your desired card width with some spacing
      decelerationRate="fast"
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: screenWidth * 0.8, // Set your desired card width
    height: 200, // Set your desired card height
    backgroundColor: "lightgray",
    marginHorizontal: 10, // Set your desired spacing
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CenteredCardFlatList;
