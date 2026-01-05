import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  bombImage: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },

  menuTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0F5132",
    marginBottom: 30,
    letterSpacing: 2,
  },

  menuButton: {
    width: "80%",
    maxWidth: 280,
    alignItems: "center",
    backgroundColor: "#198754",
    paddingVertical: 14,
    borderRadius: 18,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  menuButtonAlt: {
    backgroundColor: "#B02A37",
  },

  menuText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
