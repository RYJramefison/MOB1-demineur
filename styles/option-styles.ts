import { StyleSheet } from "react-native";

export const OptionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#0F5132",
  },

  optionBlock: {
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  label: {
    fontSize: 18,
    color: "#198754",
    fontWeight: "500",
  },

  value: {
    fontSize: 16,
    color: "#6C757D",
  },

  difficultyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  difficultyButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 6,
    borderRadius: 12,
    backgroundColor: "#E9ECEF",
  },

  difficultyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#495057",
  },

  activeDifficulty: {
    backgroundColor: "#B02A37",
  },

  activeDifficultyText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
