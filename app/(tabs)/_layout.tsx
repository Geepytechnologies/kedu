import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, View, Text, Platform } from "react-native";

import Colors, { primary } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

const Linkicon = (props: { color: string }) => {
  return <Ionicons name="add-circle-outline" size={27} color={props.color} />;
};
const Homeicon = (props: { color: string }) => {
  return <AntDesign name="home" size={24} color={props.color} />;
};
const Searchicon = (props: { color: string }) => {
  return <MaterialIcons name="saved-search" size={27} color={props.color} />;
};
const Settingsicon = (props: { color: string }) => {
  return <Ionicons name="settings-outline" size={24} color={props.color} />;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          height: Platform.OS == "android" ? 70 : 80,
          // borderTopLeftRadius: 17,
          // borderTopRightRadius: 17,
        },
        tabBarItemStyle: { paddingVertical: Platform.OS == "android" ? 10 : 0 },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#b9b9b9a2",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Homeicon color={color} />,
          headerShown: false,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,

          tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "add",
          headerShown: false,

          tabBarIcon: ({ color }) => <Linkicon color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,

          tabBarIcon: ({ color }) => <Searchicon color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          headerShown: false,

          tabBarIcon: ({ color }) => <Settingsicon color={color} />,
        }}
      />
    </Tabs>
  );
}
