import { boxStyles } from "@/styles/box-styles";
import React, { FC } from "react";
import { Image, Pressable, Text } from "react-native";

export interface Cell {
  revealed: boolean;
  bomb: boolean;
  adjacent: number;
}

interface BoxProps {
  cell: Cell;
  index1: number;
  index2: number;
  onPress: (i: number, j: number) => void;
  revealAll?: boolean; 
}

const numberColors: Record<string, string> = {
  "1": "#00A2FF",
  "2": "#00B300",
  "3": "#FFD500",
  "4": "#FF8C00",
  "5": "#FF3B3B",
  "6": "#B80000",
};

export const Box: FC<BoxProps> = ({ cell, index1, index2, onPress, revealAll = false }) => {
  const show = revealAll || cell.revealed;

  const baseStyle = {
    ...boxStyles.squareBox,
    backgroundColor: show ? "#858889" : "#1bb5fc",
  };

  if (show && cell.bomb) {
    return (
      <Pressable onPress={() => onPress(index1, index2)} style={baseStyle}>
        <Image
          source={require("@/assets/bomb.png")}
          style={boxStyles.bombImage}
          resizeMode="contain"
        />
      </Pressable>
    );
  }

  if (show && !cell.bomb && cell.adjacent > 0) {
    const color = numberColors[String(cell.adjacent)] ?? "#000";
    return (
      <Pressable onPress={() => onPress(index1, index2)} style={baseStyle}>
        <Text style={{ color, fontWeight: "700" }}>{cell.adjacent}</Text>
      </Pressable>
    );
  }

  return <Pressable onPress={() => onPress(index1, index2)} style={baseStyle} />;
};
