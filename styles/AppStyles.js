import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  infoContainer: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  profileItem: {
    alignItems: "center",
    padding: 15,
  },
  infos: {
    fontSize: 20,
    fontFamily: "InriaSans_300Light",
  },

  titleText: {
    fontFamily: "InriaSans_700Bold",
    fontSize: 25,
    padding: 9,
  },

  profileImg: {
    width: 300,
    height: 300,
    borderRadius: 14,
  },

  text: {
    fontSize: 25,
    fontFamily: "InriaSans_700Bold_Italic",
  },
});
