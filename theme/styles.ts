import {StyleSheet} from "react-native";
import {accent, secondarytext, white} from "./colors";

export default StyleSheet.create({
  container: {
    flex:1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
  },
  whiteText: {
    color: white
  },
  secondaryText: {
    color: secondarytext
  },
  padding: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart: 16,
    paddingEnd: 16,
  },
  accentBtn: {
    borderRadius: 8,
    backgroundColor: accent,
  }
})
