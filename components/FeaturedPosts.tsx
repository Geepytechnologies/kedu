import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { primary2 } from "../constants/Colors";

type Props = {};

const FeaturedPosts = (props: Props) => {
  const flatListRef = useRef<FlatList | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredpostsdata = [
    {
      key: "1",
      id: 1,
    },
    {
      key: "2",
      id: 2,
    },
  ];

  const Featured = () => {
    return (
      <View
        style={{
          backgroundColor: "#43B4B3",
          height: 170,
          width: Dimensions.get("window").width - 40,
          borderRadius: 16,
          marginRight: 15,
        }}
      >
        {/* Dots */}
        <View style={styles.dotsContainer}>
          {featuredpostsdata.map((_, index) => (
            <Dot key={index} active={index === currentIndex} />
          ))}
        </View>
      </View>
    );
  };

  const scrollNext = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: 1, animated: true });
    }
  };

  const scrollPrev = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: 0, animated: true });
    }
  };

  const onScroll = (event: { nativeEvent: { contentOffset: { x: any } } }) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(
      contentOffset / (Dimensions.get("window").width - 40)
    );
    setCurrentIndex(index);
  };
  type Active = {
    active: boolean;
  };
  const Dot = ({ active }: Active) => (
    <TouchableOpacity
      style={[styles.dot, { backgroundColor: active ? "white" : "lightgray" }]}
    />
  );
  return (
    <View style={[]}>
      <FlatList
        ref={flatListRef}
        data={featuredpostsdata}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={Featured}
        horizontal={true}
        pagingEnabled
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => ({
          length: Dimensions.get("window").width,
          offset: Dimensions.get("window").width * index,
          index,
        })}
        onScroll={onScroll}
      />
    </View>
  );
};

export default FeaturedPosts;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    position: "absolute",
    bottom: 10,
    right: 0,
    left: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
