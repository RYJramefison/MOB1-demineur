import { StyleSheet } from "react-native";

export const demineurStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 12,
    alignItems: "center",
  },

  header: {
    marginBottom: 12,
    alignItems: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0F5132",
  },

  subTitle: {
    fontSize: 14,
    color: "#198754",
    marginTop: 2,
  },

  board: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  horizontalView: {
    flexDirection: "row",
  },

  footer: {
    marginTop: 16,
    alignItems: "center",
  },

  infoText: {
    fontSize: 16,
    color: "#0F5132",
    marginBottom: 8,
  },

  gameOverText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#B02A37",
    marginBottom: 8,
  },

  restartButton: {
    marginTop: 4,
    borderRadius: 12,
    overflow: "hidden",
  },
});
