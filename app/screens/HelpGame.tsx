import { helpGameStyles as styles } from "@/styles/helpGame-styles";
import { Text, View } from "react-native";

export default function Help() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🎄 How to Play</Text>

        <Text style={styles.text}>
          The goal of Minesweeper is to uncover all the cells that do not contain
          mines.
        </Text>

        <Text style={styles.text}>
          When you reveal a cell, a number appears showing how many mines are
          present in the surrounding cells.
        </Text>

        <Text style={styles.text}>
          Use these numbers to deduce where mines are hidden. Revealing a{" "}
          <Text style={styles.highlight}>mine</Text> ends the game.
        </Text>

        <Text style={styles.text}>
          You win when all <Text style={styles.highlight}>safe cells</Text> are
          revealed 🎁
        </Text>
      </View>
    </View>
  );
}
