import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { primary2 } from "../../../constants/Colors";
import HandEmoji from "../../../assets/images/handemoji.svg";
import { Feather } from "@expo/vector-icons";
import Slideposts, { sliderdata } from "../../../components/users/Slideposts";
import Connect from "../../../assets/images/connect.svg";
import Meditation from "../../../assets/images/meditation.svg";
import { Link } from "expo-router";
import Slider from "../../../components/Slider";
import Notifications from "../../../components/Notifications";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSelector } from "react-redux";

const screenHeight = Dimensions.get("window").height;

export default function TabOneScreen() {
  const { currentuser } = useSelector((state: any) => state.userSlice);
  const username = currentuser?.user_metadata.firstname;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <View>
            <View style={styles.welcomecon}>
              <Text style={styles.welcometext}>Hello {username}</Text>
              <HandEmoji />
            </View>
            <View style={styles.subheadercon}>
              <Text style={styles.header1}>Kedu, </Text>
              <Text style={styles.header2}>how are you today?</Text>
            </View>
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <View style={styles.inputcontainer}>
              <Feather name="search" size={24} color="black" />
              <TextInput
                style={styles.inputcon}
                placeholder="What are you looking for?"
                placeholderTextColor={"#BDBDBD"}
              />
              <Feather name="sliders" size={24} color="black" />
            </View>
            {/* links */}
            <View style={styles.linkcon}>
              <Pressable
                onPress={() => router.push("/(tabs)/home/connect/")}
                style={styles.link1}
              >
                <Connect width={60} height={60} />
                <Text style={styles.linktext}>Connect</Text>
              </Pressable>
              <View style={styles.link1}>
                <Meditation width={60} height={60} />
                <Text style={styles.linktext}>Meditation</Text>
              </View>
              <View style={styles.link1}>
                <Image
                  source={require("../../../assets/images/link.jpg")}
                  style={{ width: 60, height: 60 }}
                />
                <Text style={styles.linktext}>Quick Links</Text>
              </View>
            </View>
          </View>
        </View>
        {/* scroll list */}
        <Slider />
        <Notifications />
      </ScrollView>
      <Pressable
        onPress={() => router.push("/(tabs)/profile/chat")}
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
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // minHeight: screenHeight,
    // alignItems: "center",
    // justifyContent: "center",
  },
  top: {
    backgroundColor: primary2,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    gap: 23,
    paddingTop: 60,
  },
  welcomecon: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  welcometext: {
    fontFamily: "Poppins_500Medium",
    fontSize: 24,
    color: "#fff",
  },
  inputcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 6,
    gap: 5,
  },
  inputcon: {
    color: "black",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    flex: 1,
  },
  subheadercon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  header1: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: "white",
  },
  header2: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    fontStyle: "italic",
    color: "white",
  },
  linkcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link1: {
    width: "30%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  linktext: {
    color: "#000",
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
  },
});
