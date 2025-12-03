// app/index.tsx
import { Box } from "@/components/box";
import { indexStyles } from "@/styles/index-styles";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Cell, createBoard, revealCellAt } from "../utilities/create-board";

export function Demineur() {
  const [board, setBoard] = useState<Cell[][]>(() => createBoard(20, 40));
  const [gameOver, setGameOver] = useState(false);

  const handlePress = (i: number, j: number) => {
    if (gameOver) return;

    const { newBoard, exploded } = revealCellAt(board, i, j);
    setBoard(newBoard);
    if (exploded) {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setBoard(createBoard(20, 40));
    setGameOver(false);
  };

  // optional: compute remaining unrevealed non-bomb squares (not required by spec)
  const totalCells = board.length * board[0].length;
  const unrevealedNonBombs = board.flat().filter(c => !c.revealed && !c.bomb).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Démineur — TD Mob 1</Text>

      <View>
        {board.map((row, i) => (
          <View key={`row-${i}`} style={indexStyles.horizontalView}>
            {row.map((cell, j) => (
              <Box
                key={`box-${i}-${j}`}
                cell={cell}
                index1={i}
                index2={j}
                onPress={handlePress}
                revealAll={gameOver} // when game over show everything
              />
            ))}
          </View>
        ))}
      </View>

      {gameOver ? (
        <View style={styles.footer}>
          <Text style={styles.gameOverText}>Game Over — Vous avez touché une bombe</Text>
          <Button title="Recommencer" onPress={handleRestart} />
        </View>
      ) : (
        <View style={styles.footer}>
          <Text>Cases restantes (non révélées et non-bombes): {unrevealedNonBombs}</Text>
          <Button title="Recommencer" onPress={handleRestart} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  footer: {
    marginTop: 12,
    alignItems: "center",
  },
  gameOverText: {
    color: "red",
    marginBottom: 8,
  },
});
