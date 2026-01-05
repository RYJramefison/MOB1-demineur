import { Box } from "@/components/box";
import { useGame } from "@/contexts/GameContext";
import { useSound } from "@/contexts/SoundContext";
import { demineurStyles } from "@/styles/demineur-styles";
import { Audio } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import { Cell, createBoard, revealCellAt } from "../../utilities/create-board";

export default function Demineur() {
  const { config, difficulty } = useGame();
  const { rows, cols, bombs } = config;
  const safeSound = useRef<Audio.Sound | null>(null);
  const bombSound = useRef<Audio.Sound | null>(null);

  const { isEnabled } = useSound();

  useEffect(() => {
    const loadSounds = async () => {
      const { sound: safe } = await Audio.Sound.createAsync(
        require("@/assets/sounds/click.mp3"),
        { volume: 1 }
      );
  
      const { sound: bomb } = await Audio.Sound.createAsync(
        require("@/assets/sounds/bomb.mp3"),
        { volume: 1 }
      );
  
      safeSound.current = safe;
      bombSound.current = bomb;
    };
  
    loadSounds();
  
    return () => {
      safeSound.current?.unloadAsync();
      bombSound.current?.unloadAsync();
    };
  }, []);

  

  const [board, setBoard] = useState<Cell[][]>(() =>
    createBoard(rows, bombs)
  );

  const [gameOver, setGameOver] = useState(false);

  const handlePress = async (i: number, j: number) => {
    if (gameOver) return;
  
    const { newBoard, exploded } = revealCellAt(board, i, j);
    setBoard(newBoard);
  
    // 🔊 FX sonore
    if (isEnabled) {
      if (exploded) {
        await bombSound.current?.replayAsync();
      } else {
        await safeSound.current?.replayAsync();
      }
    }
  
    if (exploded) {
      setGameOver(true);
    }
  };
  

    const handleRestart = () => {
    setBoard(createBoard(rows, bombs));
    setGameOver(false);
  };

  const unrevealedNonBombs = board.flat().filter(c => !c.revealed && !c.bomb).length;

  return ( <View style={demineurStyles.container}>
    {/* 🎄 HEADER */}
    <View style={demineurStyles.header}>
      <Text style={demineurStyles.title}>🎄 Démineur</Text>
      <Text style={demineurStyles.subTitle}>
        {difficulty} • {rows} x {cols}
      </Text>
    </View>

    {/* 🎮 BOARD */}
    <View style={demineurStyles.board}>
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

    {/* 🎁 FOOTER */}
    <View style={demineurStyles.footer}>
      {gameOver ? (
        <Text style={demineurStyles.gameOverText}>
          💥 Game Over — Bombe touchée
        </Text>
      ) : (
        <Text style={demineurStyles.infoText}>
          🎁 Cases restantes : {unrevealedNonBombs}
        </Text>
      )}

      <View style={demineurStyles.restartButton}>
        <Button title="Recommencer 🎄" onPress={handleRestart} />
      </View>
    </View>
  </View>
);
}


