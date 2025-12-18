import { Box } from "@/components/box";
import { demineurStyles } from "@/styles/demineur-styles";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Cell, createBoard, revealCellAt } from "../../utilities/create-board";

export default function Demineur() {
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

  const unrevealedNonBombs = board.flat().filter(c => !c.revealed && !c.bomb).length;

  return (
    <View style={demineurStyles.container}>
      <Text style={demineurStyles.title}>Démineur 20 x 20</Text>

      <View>
        {board.map((row, i) => (
          <View key={`row-${i}`} style={demineurStyles.horizontalView}>
            {row.map((cell, j) => (
              <Box
                key={`box-${i}-${j}`}
                cell={cell}
                index1={i}
                index2={j}
                onPress={handlePress}
                revealAll={gameOver} 
              />
            ))}
          </View>
        ))}
      </View>

      {gameOver ? (
        <View style={demineurStyles.footer}>
          <Text style={demineurStyles.gameOverText}>Game Over — Vous avez touché une bombe</Text>
          <Button title="Recommencer" onPress={handleRestart} />
        </View>
      ) : (
        <View style={demineurStyles.footer}>
          <Text style={demineurStyles.text}>Cases restantes: {unrevealedNonBombs}</Text>
          <Button title="Recommencer" onPress={handleRestart} />
        </View>
      )}
    </View>
  );
}


