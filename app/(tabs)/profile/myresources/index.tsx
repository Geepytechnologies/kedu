import {
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Resourcecard from "../../../../components/resources/Resourcecard";

type Props = {};

const data = [
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

const index = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} style={styles.connectcon}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <View>
            <Text style={styles.connect}>My Resources</Text>
          </View>
        </Pressable>
        <View style={{ gap: 16 }}>
          <Text style={styles.resourcetitle}>Best daily habits</Text>
          <FlatList
            data={data}
            renderItem={Resourcecard}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
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
  connect: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    color: "#000",
  },
  resourcetitle: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: "WorkSans_500Medium",
  },
});
