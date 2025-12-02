import { boxStyles } from "@/styles/box-styles";
import { FC } from "react";
import { Pressable } from "react-native";

interface BoxProps {
    value: number;
    index1: number;
    index2: number;
    onPress: (index1: number, index2: number) => void;
}

export const Box: FC<BoxProps> = (props) => {

    const { value, index1, index2, onPress } = props;

    const style = {
        ...boxStyles.squareBox, 
        backgroundColor: value === 0 ? "red" : "grey"
    };
    
    return <Pressable onPress={()=> onPress(index1, index2)} style={style}/>
}