import { StyleSheet } from "react-native";

export const helpGameStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F5132",
    marginBottom: 12,
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    color: "#198754",
    marginBottom: 10,
    lineHeight: 22,
  },

  highlight: {
    color: "#B02A37",
    fontWeight: "600",
  },
});
