import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useSegments } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import {
  WorkSans_500Medium,
  WorkSans_400Regular,
} from "@expo-google-fonts/work-sans";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "../utils/redux/store";
import { useAuthentication } from "../hooks/useAuthentication";
import Authcomponent from "../components/auth/Authcomponent";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    WorkSans_500Medium,
    WorkSans_400Regular,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <Authcomponent>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <StatusBar style={"auto"} />

          <Stack>
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="selectprofile"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="doctor/auth/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="doctor/auth/signup"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="doctor/auth/login"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="patient/auth/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="patient/auth/signup"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="patient/auth/login"
              options={{ headerShown: false }}
            />
          </Stack>
        </ThemeProvider>
      </Authcomponent>
    </Provider>
  );
}
