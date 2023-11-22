import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const widthPercentage = (percentage: number) =>
  (windowWidth * percentage) / 100;
export const heightPercentage = (percentage: number) =>
  (windowHeight * percentage) / 100;
