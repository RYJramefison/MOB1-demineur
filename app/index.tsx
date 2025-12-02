import { Box } from "@/components/box";
import { indexStyles } from "@/styles/index-styles";
import { useState } from "react";
import { View } from "react-native";
import { createBoard } from "../utilities/create-board";

export default function Index() {
  const [board, setBoard] = useState(createBoard(20))

  const handleChangeColor = (index1: number, index2: number) => {
    const tempBoard = board.slice();
    const currentValue = tempBoard[index1][index2];
    tempBoard[index1][index2] = currentValue === 0 ? 1 : 0;
    setBoard(tempBoard);
  }

  

  return (
    <View>
      {board.map((tab, index1) => 
        <View key={`view-horizontal-${index1}`} style={indexStyles.horizontalView}>
          {tab.map((value, index2) =>(
            <Box index1={index1} index2={index2} onPress={handleChangeColor} value={value} key={`box-${index2}`}/>
          ))}
        </View>
        )}
    </View>
  );
}
