import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import Stories from "../../../components/Stories";
import { primary2 } from "../../../constants/Colors";

type Props = {};

interface StoryDataProps {
  id: string;
  name: String;
  profileurl: String;
}

const storydata: StoryDataProps[] = [
  {
    id: "1",
    name: "Maria",
    profileurl: "",
  },
  {
    id: "2",
    name: "Josh",
    profileurl: "",
  },
];

const recentactivities = [
  {
    id: "1",
  },
  {
    id: "2",
  },
];

const index = (props: Props) => {
  const Activities = () => {
    return (
      <View style={styles.notecon}>
        <View
          style={{
            display: "flex",
            gap: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ position: "relative" }}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/profileimg.png")}
            />
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 50,
                position: "absolute",
                bottom: 1,
                right: 1,
                backgroundColor: "#35CC75",
              }}
            ></View>
          </View>
          <View style={[styles.columnview]}>
            <Text
              style={{
                fontFamily: "Roboto_500Medium",
                lineHeight: 13,
                fontSize: 12,
              }}
            >
              Maria Morgan
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                lineHeight: 13,
                fontSize: 10,
              }}
            >
              Hello Maria, book an appointment...
            </Text>
          </View>
        </View>
        <View style={[styles.columnview]}>
          <Text
            style={{
              fontFamily: "Roboto_400Regular",
              color: "#BDBDBD",
            }}
          >
            02:30
          </Text>
          <Ionicons
            style={{ marginLeft: "auto" }}
            name="md-checkmark-done"
            size={10}
            color={primary2}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} style={styles.connectcon}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <View>
            <Text style={styles.connect}>Top Kedu Stories</Text>
            <Text style={styles.find}>See what experts are saying</Text>
          </View>
        </Pressable>
        <Stories storydata={storydata} />
        <View
          style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 14 }}
        ></View>
        <Text style={{ fontFamily: "Poppins_400Regular" }}>Profile</Text>
        <View style={styles.optionscon}>
          <Link
            style={styles.option}
            href={"/(tabs)/profile/myconnections"}
            suppressHighlighting
          >
            My Connections
          </Link>
          <Text style={styles.option}>Support Groups</Text>
          <Link
            href={"/(tabs)/profile/myresources"}
            suppressHighlighting
            style={styles.option}
          >
            My Resources
          </Link>
        </View>
        <Text style={{ marginVertical: 20, fontFamily: "Poppins_400Regular" }}>
          Recent Activities
        </Text>
        <FlatList
          data={recentactivities}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={Activities}
          horizontal={false}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          backgroundColor: "#51AB9F",
          width: 60,
          height: 60,
          borderRadius: 50,
          position: "absolute",
          right: 10,
          bottom: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons name="message" size={24} color="white" />
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
  find: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#000",
  },
  optionscon: {
    backgroundColor: "#CCF1D2",
    width: "100%",
    borderRadius: 15,
    paddingVertical: 34,
    paddingHorizontal: 16,
    marginTop: 13,
    display: "flex",
    gap: 13,
  },
  option: {
    backgroundColor: "#F0FAFD",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    padding: 10,
  },
  notecon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  columnview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: 31,
    height: 31,
    borderRadius: 50,
  },
});
