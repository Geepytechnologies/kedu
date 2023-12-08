import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="myconnections/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="myconnections/therapistpage"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="chat/room" options={{ headerShown: false }} />
      <Stack.Screen name="chat/appointments" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
