import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

type Props = {};

const Topstorycard = (props: Props) => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={[styles.rowview, { gap: 8 }]}>
        <Image
          source={{ uri: "https://shorturl.at/bepqL" }}
          style={styles.authorimage}
        />
        <View style={[styles.rowview, { gap: 4 }]}>
          <Text style={styles.author}>Oscar Sun</Text>
          <Text style={[styles.author, { color: "#A8A8A8" }]}>in</Text>
          <Text style={styles.author}>UX collective</Text>
        </View>
        <Text style={styles.author}>· Aug 28</Text>
      </View>
      <Text style={styles.title}>Living in a lockdown night</Text>
      <Text style={styles.subtitle}>
        Maria is one of the large number of asylum seekers who live their lives
        - in many cases for years.
      </Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien erat
        bibendum orci nisl, phasellus sed. Aliquet in viverra id quis facilisis
        pellentesque scelerisque suspendisse. At amet, elit magna at magnis at
        porta. In mi ac sed tincidunt vitae diam. Lacinia enim posuere id nunc,
        odio lacinia. Ante vitae faucibus lectus tincidunt aliquam nunc, ut
        turpis. Faucibus eget risus interdum bibendum enim est. Lacus, aliquam
        enim etiam sit. Volutpat nibh in bibendum ut elit mollis.
      </Text>
    </View>
  );
};

export default Topstorycard;

const styles = StyleSheet.create({
  rowview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  authorimage: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  author: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 24,
    marginVertical: 15,
  },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#A8A8A8",
  },
  content: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "#262626",
    marginTop: 15,
  },
});
