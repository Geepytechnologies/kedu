import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import { Direction } from "react-native-calendars/src/types";
import { MaterialIcons } from "@expo/vector-icons";
import { primary2, secondary } from "../../../../constants/Colors";
import { router, useSegments } from "expo-router";
import { useAuthentication } from "../../../../hooks/useAuthentication";

type Props = {};

const appointments = (props: Props) => {
  const [selectedDates, setSelectedDates] = useState({});
  const segments = useSegments();
  useAuthentication();
  useEffect(() => {
    console.log({ seg: segments });
  }, [segments]);
  const today = new Date();

  const handleDayPress = (day: { dateString: any }) => {
    setSelectedDates({
      [day.dateString]: { selected: true, selectedColor: secondary },
    });
  };

  //   const handleDayPress = (day: { dateString: any }) => {
  //     // Update selected dates
  //     setSelectedDates((prevDates) => ({
  //       ...prevDates,
  //       [day.dateString]: { selected: true, selectedColor: "blue" },
  //     }));
  //   };
  const renderCustomArrow = (direction: Direction) => {
    // Custom arrow component
    return (
      <View>
        {direction === "left" ? (
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        ) : (
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} style={styles.connectcon}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </Pressable>
        <View>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [today.toISOString().split("T")[0]]: {
                selected: true,
                marked: true,
                selectedColor: primary2,
                dotColor: "#fff",
              },
              ...selectedDates,
            }}
            renderArrow={renderCustomArrow}
            markingType={"custom"}
          />
        </View>
        <View
          style={[
            styles.rowview,
            { justifyContent: "space-between", marginTop: 30 },
          ]}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 20,
              lineHeight: 24,
            }}
          >
            Time
          </Text>
          <View style={[styles.rowview, { gap: 10 }]}>
            <Text style={styles.time}>09:41</Text>
            <View style={[styles.rowview]}>
              <Pressable style={styles.activetimecon}>
                <Text style={[styles.activetime]}>AM</Text>
              </Pressable>
              <Pressable>
                <Text style={[styles.inactivetime]}>PM</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 12,
    backgroundColor: "#fff",
  },
  connectcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 40,
  },
  rowview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    backgroundColor: "#7676801F",
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    lineHeight: 28,
  },
  activetimecon: {},
  activetime: {
    padding: 8,
    backgroundColor: "#43B4B3",
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    lineHeight: 28,
    color: "#fff",
  },
  inactivetime: {
    backgroundColor: "#7676801F",
    padding: 8,
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    lineHeight: 28,
    color: "#000",
  },
});
