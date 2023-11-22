import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Link, router, useNavigation } from "expo-router";
import { primary } from "../../../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";

import { heightPercentage } from "../../../../utils/utilityfunctions";

type Props = {};

const index = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleNavigation = (path: any) => {
    closeModal();
    router.push(path);
  };
  const Modalcomponent = () => {
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
            minHeight: 300,
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
              justifyContent: "center",
              gap: 10,
              flex: 1,
            }}
          >
            <Pressable
              onPress={() =>
                handleNavigation("/(tabs)/profile/myconnections/therapistpage")
              }
            >
              <Text style={{ fontFamily: "Poppins_500Medium", color: "#fff" }}>
                View profile
              </Text>
            </Pressable>
            <Link
              href="/(tabs)/profile/myconnections/"
              style={{ fontFamily: "Poppins_500Medium", color: "#fff" }}
              suppressHighlighting
            >
              Remove from connection
            </Link>
            <Link
              href="/(tabs)/profile/myconnections/"
              style={{ fontFamily: "Poppins_500Medium", color: "#fff" }}
              suppressHighlighting
            >
              Send a message
            </Link>
            <Link
              href="/(tabs)/profile/myconnections/"
              style={{ fontFamily: "Poppins_500Medium", color: "#fff" }}
              suppressHighlighting
            >
              Share profile via message
            </Link>
            <Pressable
              onPress={() => handleNavigation("/(tabs)/profile/myconnections/")}
            >
              <Text style={{ fontFamily: "Poppins_500Medium", color: "#fff" }}>
                Report this profile
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} style={styles.connectcon}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <View>
            <Text style={styles.connect}>My Connections</Text>
            <Text style={styles.find}>Following 200</Text>
          </View>
        </Pressable>
        <View style={styles.inputcontainer}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={styles.inputcon}
            placeholder="search"
            placeholderTextColor={"#BDBDBD"}
          />
        </View>
        {/* my connections */}
        <View style={{ marginTop: 20 }}>
          <View
            style={[
              styles.rowview,
              {
                justifyContent: "space-between",
                backgroundColor: "#F0FAFD",
                padding: 10,
                borderRadius: 8,
              },
            ]}
          >
            <View style={[styles.rowview, { gap: 10 }]}>
              <Image
                source={require("../../../../assets/images/user1.jpg")}
                style={styles.imgcon}
              />
              <Text style={{ fontFamily: "WorkSans_500Medium" }}>
                Dr Hannah
              </Text>
            </View>
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => setModalVisible(true)}
            >
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
      <Modalcomponent />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: primary,
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
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
  },
  inputcon: {
    color: "black",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    flex: 1,
  },
  imgcon: {
    width: 51,
    height: 51,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
  },
  rowview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
