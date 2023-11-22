import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckmarkIcon from "../../../assets/images/checkmark.svg";
import Character from "../../../assets/images/character.svg";

type Props = {};

const accountcreated = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.successcon}>
        <CheckmarkIcon />
        <Text style={styles.account}>Account created!</Text>
        <Text style={styles.message}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
          vestibulum augue massa sed aenean.
        </Text>
        <Character />
      </View>
    </View>
  );
};

export default accountcreated;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  successcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  account: {
    fontFamily: "WorkSans_500Medium",
    fontSize: 24,
    lineHeight: 28,
  },
  message: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
  },
});
