import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Support from "../../assets/images/contact_support.svg";
import Signout from "../../assets/images/power_settings_new.svg";
import { Link, router } from "expo-router";
import Modal from "react-native-modal";

const settings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  const [biometric, setBiometric] = useState(true);
  const [emailnotifications, setEmailnotifications] = useState(false);
  const [pushnotifications, setPushnotifications] = useState(true);
  const togglebiometric = () => {
    setBiometric(!biometric);
  };
  const toggleemailnotifications = () => {
    setEmailnotifications(!emailnotifications);
  };
  const togglepushnotifications = () => {
    setPushnotifications(!pushnotifications);
  };

  const signout = async () => {};
  const handleSignout = () => {
    setModalVisible(true);
  };
  const handleSignoutcancel = () => {
    setModalVisible(false);
  };
  const Signoutmodal = () => {
    return (
      <Modal
        style={{ margin: 0, display: "flex", alignItems: "center" }}
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        swipeDirection={["down"]}
        onSwipeComplete={closeModal}
        propagateSwipe={true}
        backdropColor="transparent"
      >
        <View
          style={{
            backgroundColor: "#43B4B3",
            minHeight: 250,
            marginTop: "auto",
            width: "100%",

            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 75,
                height: 5,
                backgroundColor: "#F0FAFD",
                marginVertical: 20,
                borderRadius: 5,
              }}
            ></View>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: 30,
              gap: 20,
              flex: 1,
            }}
          >
            <Pressable onPress={signout}>
              <Text style={{ fontFamily: "Poppins_500Medium", color: "#fff" }}>
                Proceed
              </Text>
            </Pressable>
            <Pressable onPress={handleSignoutcancel}>
              <Text style={{ fontFamily: "Poppins_500Medium", color: "#fff" }}>
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <SafeAreaView
      style={{
        padding: 16,
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => router.back()} style={styles.connectcon}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 20,
              color: "#0D0D0D",
            }}
          >
            Settings
          </Text>
        </Pressable>
        <View style={styles.contentcontainer}>
          <View style={{ height: 1, backgroundColor: "#EFEFEF" }}></View>

          <View style={styles.profile}>
            <View>
              <Text style={styles.name}>{"Maria Roberts"}</Text>
              <Text style={styles.email}>{"maria@gmail.com"}</Text>
            </View>
            <View>
              <View style={styles.imgcon}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("../../assets/images/user2.png")}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "#EFEFEF" }}></View>
          <View style={styles.profiles}>
            <Pressable onPress={() => {}} style={styles.profilesingle}>
              <FontAwesome5 name="user-circle" size={20} color="#AFAEAE" />
              <Text style={styles.profiletext}>Edit profile</Text>
            </Pressable>
            <Pressable onPress={() => {}} style={styles.profilesingle}>
              <MaterialIcons name="lock-outline" size={20} color="#AFAEAE" />
              <Text style={styles.profiletext}>Update password</Text>
            </Pressable>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.profilesingle}>
                <Ionicons name="finger-print" size={20} color="#AFAEAE" />
                <Text style={styles.profiletext}>Use biometric</Text>
              </View>
              <Pressable onPress={togglebiometric}>
                <FontAwesome5
                  style={{ fontSize: 24 }}
                  color="#0059FF"
                  name={biometric ? "toggle-on" : "toggle-off"}
                />
              </Pressable>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "#EFEFEF" }}></View>
          <View style={styles.profiles}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.profilesingle}>
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={20}
                  color="#AFAEAE"
                />
                <Text style={styles.profiletext}>Allow push notifications</Text>
              </View>
              <Pressable onPress={togglepushnotifications}>
                <FontAwesome5
                  style={{ fontSize: 24 }}
                  color="#0059FF"
                  name={pushnotifications ? "toggle-on" : "toggle-off"}
                />
              </Pressable>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.profilesingle}>
                <MaterialIcons
                  name="mark-email-unread"
                  size={20}
                  color="#AFAEAE"
                />
                <Text style={styles.profiletext}>
                  Allow email notifications
                </Text>
              </View>
              <Pressable onPress={toggleemailnotifications}>
                <FontAwesome5
                  style={{ fontSize: 24 }}
                  color="#0059FF"
                  name={emailnotifications ? "toggle-on" : "toggle-off"}
                />
              </Pressable>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "#EFEFEF" }}></View>
          <View style={styles.profiles}>
            <View style={styles.profilesingle}>
              <Support />
              <Text style={styles.profiletext}>Contact support</Text>
            </View>
            <TouchableOpacity
              onPress={handleSignout}
              style={styles.profilesingle}
            >
              <Signout />
              <Text style={styles.profiletextred}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Signoutmodal />
    </SafeAreaView>
  );
};

export default settings;

const styles = StyleSheet.create({
  contentcontainer: {
    marginTop: 24,
  },
  imgcon: {
    backgroundColor: "#ffc2bd",
    borderRadius: 50,
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  profiletext: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#0D0D0D",
  },
  profiletextred: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#DA1212",
  },
  profiles: {
    gap: 24,
    marginVertical: 24,
  },
  profilesingle: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  name: {
    color: "#1A1A1A",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  email: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#525252",
    letterSpacing: 0.24,
  },
  connectcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 15,
  },
});
