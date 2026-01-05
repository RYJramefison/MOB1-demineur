import React, { createContext, useContext, useState } from "react";

export type Difficulty = "Easy" | "Medium" | "Hard";

type GameConfig = {
  rows: number;
  cols: number;
  bombs: number;
};

const DIFFICULTY_CONFIG: Record<Difficulty, GameConfig> = {
  Easy: { rows: 8, cols: 8, bombs: 10 },
  Medium: { rows: 12, cols: 12, bombs: 25 },
  Hard: { rows: 20, cols: 20, bombs: 40 },
};

type GameContextType = {
  difficulty: Difficulty;
  config: GameConfig;
  setDifficulty: (d: Difficulty) => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>("Medium");

  return (
    <GameContext.Provider
      value={{
        difficulty,
        config: DIFFICULTY_CONFIG[difficulty],
        setDifficulty,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used inside GameProvider");
  }
  return context;
};
