import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="myconnections/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="myconnections/therapistpage"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="myresources/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="myresources/resourcedetail"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="chat/room" options={{ headerShown: false }} />
      <Stack.Screen name="chat/appointments" options={{ headerShown: false }} />
      <Stack.Screen name="chat/index" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
