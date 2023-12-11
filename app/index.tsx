import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Link } from "expo-router";
import Logo from "../components/svgs/Logo";
import Textlogo from "../components/svgs/Textlogo";
import Topleft from "../assets/images/wavytopleft.svg";
import Topright from "../assets/images/topright.svg";
import Bottomleft from "../assets/images/bottomleft.svg";
import Bottomright from "../assets/images/bottomright.svg";
import { primary, primary2, primary3 } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

type Props = {};

const index = (props: Props) => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const scaleAnimation = Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]);

    const opacityAnimation = Animated.sequence([
      Animated.timing(opacityValue, {
        toValue: 0.7,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
    ]);

    // Create an infinite loop for the ripple animation
    const infiniteRipple = Animated.parallel([
      Animated.loop(scaleAnimation),
      Animated.loop(opacityAnimation),
    ]);

    infiniteRipple.start(); // Start the infinite ripple animation
  }, [scaleValue, opacityValue]);

  const scale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  return (
    <View style={styles.container}>
      <StatusBar style={"light"} backgroundColor={primary3} />

      <Topleft style={{ opacity: 0.4 }} />
      <Topright
        style={{ opacity: 0.4, position: "absolute", top: 0, right: 0 }}
      />
      <Bottomleft
        style={{ opacity: 0.4, position: "absolute", bottom: 0, left: 0 }}
      />
      <Bottomright
        style={{ opacity: 0.4, position: "absolute", bottom: 0, right: 0 }}
      />
      <View style={styles.container2}>
        <View style={styles.logocon}>
          <Animated.View
            style={{
              transform: [{ scale }],
              opacity: opacityValue,
              marginBottom: 15,
            }}
          >
            <Logo width={46} height={46} />
          </Animated.View>
          <Textlogo width={116} height={52} />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary2,
    flex: 1,
    position: "relative",
  },
  container2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  logocon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 7,
    marginBottom: 40,
  },
  login: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: "#fff",
    color: primary2,
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    borderRadius: 5,
    minWidth: 325,
  },
  signup: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: primary,
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    borderRadius: 5,
    minWidth: 325,
  },
});
