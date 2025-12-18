import { StyleSheet } from "react-native";

export const OptionStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
      },
      optionBlock: {
        marginBottom: 30,
      },
      optionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
      },
      label: {
        fontSize: 18,
        marginBottom: 10,
      },
      value: {
        fontSize: 16,
        marginBottom: 10,
      },
      difficultyRow: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      difficultyButton: {
        flex: 1,
        textAlign: "center",
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        backgroundColor: "#ddd",
        fontSize: 16,
      },
      activeDifficulty: {
        backgroundColor: "#222",
        color: "#fff",
        fontWeight: "bold",
      },
  });
  