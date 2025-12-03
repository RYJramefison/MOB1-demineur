import { indexStyles } from "@/styles/index-styles";
import { View } from "react-native";
import { Demineur } from "./demineur";

export default function Index() {
  return (
    <View style={indexStyles.container}>
      {/* <Image
        source={require("@/assets/bomb.png")}
        style={indexStyles.bombImage}
        resizeMode="contain"
      />

      <View>
        
      </View>

      <Text style={indexStyles.menuTitle}>Demineur</Text>
      <Text style={indexStyles.menuText}>New Game</Text>
      <Text style={indexStyles.menuText}>Continue Game</Text>
      <Text style={indexStyles.menuText}>Help</Text>
      <Text style={indexStyles.menuText}>Option</Text> */}
      <Demineur/>
    </View>
  );
}
