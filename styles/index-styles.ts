import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  bombImage: {
    width: 120,
    height: 120,
    margin: 10,
  },

  menuTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 20,
    letterSpacing: 2,
  },

  menuButton: {
    width: "50%",
    maxWidth: 250,
    alignItems: "center",
    backgroundColor: "#bcbcbc",
    paddingVertical: 10,
    borderRadius: 16,
    marginVertical: 8,
  },

  menuText: {
    color: "#2f2f2f",
    fontSize: 15,
    fontWeight: "600",
  },
});
