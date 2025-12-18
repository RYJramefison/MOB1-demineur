import { StyleSheet, Text, View } from "react-native";

export default function Help() {
    return <View>
        <Text style={styles.title} >How to Play</Text>
    
        <Text style={styles.text}>
        The goal of Minesweeper is to uncover all the cells that do not contain mines.
        </Text>
    
        <Text style={styles.text}>
        When you reveal a cell, a number appears showing how many mines are present
        in the surrounding cells.
        </Text>
    
        <Text style={styles.text}>
        Use these numbers to deduce where mines are hidden. Revealing a mine ends
        the game.
        </Text>
    
        <Text style={styles.text}>
        You win when all safe cells are revealed.
        </Text>
  </View>
}

const styles = StyleSheet.create ({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
      },
      text: {
        fontSize: 16,
        marginBottom: 8,
        lineHeight: 22,
        textAlign: "center",
      },
  });