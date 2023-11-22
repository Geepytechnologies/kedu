import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

type Storyprops = {
  item: {
    id: string;
    name: String;
    profileurl: String;
  };
};

interface StoryDataProps {
  storydata: {
    id: string;
    name: String;
    profileurl: String;
  }[];
}

const Stories = ({ storydata }: StoryDataProps) => {
  const Storycard = ({ item }: Storyprops) => (
    <View style={{ marginRight: 18 }}>
      <View style={styles.imgcon}>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/f549/41e9/13bd1ff9c8f4885a0e92a757a8484940?Expires=1701648000&Signature=GEDveMmmfr3z8ai~QZnHmXuCELKRNc1ytgCW8rVA2NvijgZIYJ~iwxmxtZfFjTP~VV3STi~jfl2fvaj3Uo6Ym91UsDWTZpvp96jnEHx0TndwLTF~BRHp6jk4KgSULNWwFx3UhtA7nXoFFi0tAY5UT7cBfMb3p8pPQQfXpssLheLt~g8vEcmkfMAGg-s8LLARjTu-Y~~e7h1aDQf2WdmF-oFuDST4x-uLGDEtVJkVQn9Q~Q-tMtVF6O10a7~VxWF88vFE-Eto83M59c8bDmMAWGQJiwqK~HN3QQbegpw4IhYPLVmrfVj~9AHZEMc3ie1U6-Li1Yn-jpbcXvB0tp2KQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          }}
          style={styles.img}
        />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  const Searchcard = () => (
    <View style={{ marginRight: 18 }}>
      <View
        style={[
          styles.imgcon,
          { display: "flex", justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Feather name="search" size={24} color="black" />
      </View>
      <Text style={styles.name}>Search</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={storydata}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={Storycard}
        horizontal={true}
        pagingEnabled
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<Searchcard />}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  imgcon: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#FBFBFB",
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  name: {
    fontFamily: "Roboto_400Regular",
    color: "#333333",
    textAlign: "center",
  },
});
