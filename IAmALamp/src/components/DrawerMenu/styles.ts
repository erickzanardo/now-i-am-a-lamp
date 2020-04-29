import { StyleSheet } from "react-native";
import theme from "../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    height: 204
  },
  drawerItemWrapper: {
    width: "100%",
    alignItems: "center"
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    width: 237,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray
  },
  drawerItemText: {
    marginLeft: 10
  }
});
