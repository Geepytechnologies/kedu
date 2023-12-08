import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="connect/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="connect/nearbytherapists"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="connect/therapistpage"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="connect/therapistpost"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};
export default Layout;
