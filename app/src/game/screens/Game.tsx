import React, { useCallback, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { generateBoard, revealAt, revealAll } from '../utils/mines';
import Board from '../components/Board';
import { Cell } from '../types';
import styles from '../styles';

const BOARD_SIZE = 20;
const MINES_COUNT = 40;

const Game: React.FC = () => {
  const [board, setBoard] = useState<Cell[][]>(() => generateBoard(BOARD_SIZE, MINES_COUNT));
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState('');


  const restart = useCallback(() => {
    setBoard(generateBoard(BOARD_SIZE, MINES_COUNT));
    setGameOver(false);
    setGameOverMessage('');
  }, []);

  const handleCellPress = useCallback((row: number, col: number) => {
    if (gameOver) return;

    const { board: newBoard, hitMine } = revealAt(board, row, col);
    setBoard(newBoard);

    if (hitMine) {
      setGameOver(true);
      setGameOverMessage('Game Over : Vous avez cliqué sur une bombe.');
    } else {
      // check victory: all non-mine cells revealed
      const totalCells = BOARD_SIZE * BOARD_SIZE;
      const revealedCount = newBoard.flat().filter(c => c.revealed).length;
      const victory = revealedCount === (totalCells - MINES_COUNT);
      if (victory) {
        setGameOver(true);
        setGameOverMessage('Bravo ! Vous avez gagné.');
        // reveal all to show final board
        setBoard(revealAll(newBoard));
      }
    }
  }, [board, gameOver]);

  return (
    <SafeAreaProvider style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Démineur</Text>
        <Board board={board} onCellPress={handleCellPress} />

        {gameOver && (
          <View style={styles.gameOverContainer}>
            <Text style={styles.gameOverText}>{gameOverMessage}</Text>
            <View style={styles.restartButton}>
              <Button title="Recommencer" onPress={restart} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
};

export default Game;