import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { primary, secondary } from "../../../../constants/Colors";
import { Link, router } from "expo-router";
import People from "../../../../assets/images/people.svg";

type Props = {};

const room = (props: Props) => {
  interface Chat {
    item: {
      id: string;
      message: string;
    };
  }
  const chatdata = [
    {
      id: "1",
      message: "Hello Chief",
    },
    {
      id: "2",
      message: "I'm enjoying kedu",
    },
    {
      id: "3",
      message: "How are you?",
    },
    {
      id: "4",
      message: "How are you?",
    },
    {
      id: "5",
      message: "How are you?",
    },
    {
      id: "6",
      message: "How are you?",
    },
    {
      id: "7",
      message: "How are you?",
    },
  ];
  const Chatbox = ({ item }: Chat) => {
    let ismyMessage;
    const isMyMessage = () => {
      return item.id == "2";
    };
    ismyMessage = isMyMessage();
    return (
      <View
        style={[
          styles.rowview,
          ismyMessage && { alignSelf: "flex-end" },
          { marginTop: 10 },
        ]}
      >
        <View
          style={[
            styles.rowview,
            { alignItems: "flex-end", gap: 5, marginRight: 20 },
          ]}
        >
          {!ismyMessage && (
            <Image
              style={styles.profileimg}
              source={{ uri: "https://shorturl.at/htOUW" }}
            />
          )}
          <View style={ismyMessage ? styles.chatconforme : styles.chatcon}>
            <Text style={ismyMessage ? styles.chatforme : styles.chat}>
              {item.message}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>16:45</Text>
      </View>
    );
  };
  const Header = () => {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </Pressable>
        <View style={[styles.colview, { gap: 10, alignItems: "center" }]}>
          <View style={[styles.image, { position: "relative" }]}>
            <Image
              style={[styles.image, { borderRadius: 50 }]}
              source={require("../../../../assets/images/profileimg.png")}
            />
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 50,
                position: "absolute",
                bottom: 2,
                right: 3,
                backgroundColor: "#35CC75",
              }}
            ></View>
          </View>
          <View style={[styles.colview, { alignItems: "center" }]}>
            <Text style={styles.name}>Dr. Maria Roberts</Text>
            <View style={[styles.rowview, { gap: 15 }]}>
              <Text>Physiotherapist</Text>
              <View style={[styles.rowview, { gap: 3 }]}>
                <FontAwesome name="star" size={20} color={secondary} />
                <Text style={styles.name}>4.78/5</Text>
              </View>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View
            style={[
              styles.rowview,
              {
                justifyContent: "center",
                marginTop: 16,
              },
            ]}
          >
            <View style={[styles.rowview, { gap: 20 }]}>
              <View style={[styles.rowview, { gap: 4 }]}>
                <People />
                <View style={[styles.colview, {}]}>
                  <Text style={{ fontFamily: "Poppins_600SemiBold" }}>
                    345+
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins_400Regular", fontSize: 12 }}
                  >
                    Patients
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: primary,
                  borderRadius: 5,
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>Profile</Text>
              </View>

              <Link
                suppressHighlighting
                href={"/(tabs)/profile/chat/appointments"}
                style={{
                  borderColor: primary,
                  borderWidth: 2,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                Appointment
              </Link>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const Footer = () => {
    return (
      <View style={{ backgroundColor: "#F0FAFD" }}>
        <View style={[styles.rowview, styles.inputbox]}>
          <Text>Aa</Text>
          <TextInput style={styles.textinput} />
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#F4F4F4",
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="send" size={24} color="black" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 50}
        style={{ flex: 1 }}
      >
        <Header />
        <FlatList
          data={chatdata}
          renderItem={Chatbox}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          inverted={true}
          contentContainerStyle={{
            backgroundColor: "#F0FAFD",
          }}
        />

        <Footer />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default room;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    padding: 15,
    backgroundColor: "#fff",
  },
  image: {
    width: 70,
    height: 70,
  },
  rowview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  hr: {
    backgroundColor: "#E0E0E0",
    height: 0.5,
    width: "100%",
  },
  colview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    color: "#333333",
    fontFamily: "Poppins_500Medium",
  },
  chatsection: {
    backgroundColor: "#F0FAFD",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    paddingTop: 40,
    padding: 20,
  },
  profileimg: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  chatcon: {
    backgroundColor: "#CCF1D2",
    minWidth: 200,
    minHeight: 75,
    paddingLeft: 20,
    paddingVertical: 10,
    paddingRight: 10,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
  },
  chatconforme: {
    backgroundColor: "#fff",
    minWidth: 200,
    minHeight: 75,
    paddingLeft: 20,
    paddingVertical: 10,
    paddingRight: 10,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
  },
  chat: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    lineHeight: 18,
  },
  chatforme: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    lineHeight: 18,
    color: "#525252",
  },
  time: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 12,
    lineHeight: 16,
    color: "#A8A8A8",
  },
  inputbox: {
    margin: 24,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  textinput: {
    flex: 1,
  },
});
