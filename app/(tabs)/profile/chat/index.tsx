import {
  FlatList,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { primary } from "../../../../constants/Colors";
import Chatsdisplay from "../../../../components/chat/Chatsdisplay";

type Props = {};

const index = (props: Props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const handlepage = (index: number) => {
    setPageIndex(index);
  };
  const mychats = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
  return (
    <Pressable onPress={() => router.back()} style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.connectcon}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </Pressable>
      <View>
        <View>
          <View
            style={[
              styles.rowview,
              { alignItems: "flex-start", justifyContent: "space-around" },
            ]}
          >
            <Pressable
              onPress={() => handlepage(1)}
              style={[pageIndex == 1 && styles.active, styles.selectioncon]}
            >
              <Text style={[styles.selection]}>CHAT</Text>
            </Pressable>
            <Pressable
              onPress={() => handlepage(2)}
              style={[pageIndex == 2 && styles.active, styles.selectioncon]}
            >
              <Text style={[styles.selection]}>STATUS</Text>
            </Pressable>
            <Pressable
              onPress={() => handlepage(3)}
              style={[pageIndex == 3 && styles.active, styles.selectioncon]}
            >
              <Text style={[styles.selection]}>CALLS</Text>
            </Pressable>
          </View>
          {/* chats */}
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={mychats}
              renderItem={Chatsdisplay}
              horizontal={false}
              keyExtractor={(item: { id: any }) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 12,
    backgroundColor: "white",
    flex: 1,
  },
  connectcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 40,
  },
  rowview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  colview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  active: {
    borderBottomColor: primary,
    borderBottomWidth: 3,
  },
  selectioncon: {
    minWidth: 90,
    display: "flex",
    alignItems: "center",
  },
  selection: {
    paddingBottom: 5,
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 22,
  },
});
