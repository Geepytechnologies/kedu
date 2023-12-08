import {
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { primary2 } from "../../../../constants/Colors";
import Topstorycard from "../../../../components/Topstorycard";

type Props = {};

interface Options {
  item: {
    id: string;
    option: string;
  };
}
interface Status {
  item: {
    id: string;
    name: string;
    profileimg: string;
    notification: number;
  };
}

const resourcedetail = (props: Props) => {
  const [option, setOption] = useState("1");
  const optionsData = [
    {
      id: "1",
      option: "Self",
    },
    {
      id: "2",
      option: "Mental Health",
    },
    {
      id: "3",
      option: "Fitness",
    },
  ];
  const statusData = [
    {
      id: "1",
      name: "John Kinley",
      profileimg: "https://shorturl.at/htOUW",
      notification: 5,
    },
    {
      id: "2",
      name: "Precious King",
      profileimg: "https://shorturl.at/bepqL",
      notification: 10,
    },
    {
      id: "3",
      name: "Dr Bayo",
      profileimg: "https://shorturl.at/htOUW",
      notification: 2,
    },
  ];
  const handleOption = (item: string) => {
    setOption(item);
  };
  const Optionbox = ({ item }: Options) => {
    return (
      <Pressable
        onPress={() => handleOption(item.id)}
        style={[
          item.id == option ? styles.optionactive : styles.optioninactive,
        ]}
      >
        <Text
          style={[
            item.id == option && { color: "#fff" },
            {
              fontFamily: "Poppins_500Medium",
              fontSize: 14,
              lineHeight: 18,
            },
          ]}
        >
          {item.option}
        </Text>
      </Pressable>
    );
  };
  const Statusbox = ({ item }: Status) => {
    return (
      <View style={{ marginRight: 15, marginTop: 30 }}>
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: item.profileimg }}
            style={{ width: 75, height: 75, borderRadius: 10 }}
          />
          <View style={styles.notificationcon}>
            <Text style={styles.notification}>{item.notification}</Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Pressable onPress={() => router.back()} style={styles.connectcon}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <View>
            <Text style={styles.connect}>My Resources</Text>
          </View>
        </Pressable>
        <View>
          <FlatList
            data={optionsData}
            renderItem={Optionbox}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <FlatList
            data={statusData}
            renderItem={Statusbox}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* hr */}
        <View
          style={{
            height: 1,
            marginVertical: 20,
            backgroundColor: "#D0D0D0",
          }}
        ></View>
        {/* Top stories */}
        <View>
          <Text
            style={{
              fontFamily: "WorkSans_500Medium",
              lineHeight: 22,
              fontSize: 14,
            }}
          >
            TOP STORIES
          </Text>
          <Topstorycard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default resourcedetail;

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
  optioninactive: {
    borderColor: primary2,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
  },
  optionactive: {
    backgroundColor: primary2,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
  },
  notificationcon: {
    width: 20,
    height: 20,
    backgroundColor: "#262626",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -5,
    right: -5,
  },
  notification: {
    color: "#fff",
    fontFamily: "WorkSans_500Medium",
    fontSize: 10,
    lineHeight: 18,
  },
});
