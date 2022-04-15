import {StyleSheet} from "react-native";
import {colors} from "./colors";

export const pageStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: colors.background,
  },
  background: {
    backgroundColor: colors.background,
  },
  heading: {
    color: colors.text.heading,
    marginBottom: 8,
  },
  paragraph: {
    color: colors.text.paragraph,
  },
  subscript: {
    color: colors.text.subscript,
  },
  headingButtonContainer: {
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  formControl: {
    flexDirection: "column",
    flex: 1,
  },
  formControlError: {
    color: colors.danger,
  },
  divider: {
    backgroundColor: colors.primary,
    height: 1,
  },
});
