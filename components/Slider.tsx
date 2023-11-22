import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Slideposts, { sliderdata } from "./users/Slideposts";
import { primary2 } from "../constants/Colors";

const Slider = () => {
  const flatListRef = useRef<FlatList | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  type Item = {
    item: {
      key: string;
      backgroundColor: string;
      content: string;
    };
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
    const index = Math.floor(contentOffset / Dimensions.get("window").width);
    setCurrentIndex(index);
  };
  type Active = {
    active: boolean;
  };
  const Dot = ({ active }: Active) => (
    <TouchableOpacity
      style={[styles.dot, { backgroundColor: active ? primary2 : "lightgray" }]}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={sliderdata}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={Slideposts}
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
      {/* Dots */}
      <View style={styles.dotsContainer}>
        {sliderdata.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </View>
    </View>
  );
};

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
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Slider;
