import { OptionStyles } from "@/styles/option-styles";
import Slider from "@react-native-community/slider";
import { Pressable, Switch, Text, View } from "react-native";

import { Difficulty, useGame } from "@/contexts/GameContext";
import { useSound } from "@/contexts/SoundContext";

export default function Option() {
  const { isEnabled, toggleSound, volume, setVolume } = useSound();
  const { difficulty, setDifficulty } = useGame();
  return (
    <View style={OptionStyles.container}>
      <Text style={OptionStyles.title}>Options</Text>

      <View style={OptionStyles.optionRow}>
        <Text>Enable Sound</Text>
        <Switch value={isEnabled} onValueChange={toggleSound} />
      </View>

      <Slider
        minimumValue={0}
        maximumValue={100}
        value={volume * 100}
        onValueChange={setVolume}
        disabled={!isEnabled}
      />


      <Text style={OptionStyles.label}>Difficulty</Text>

      <View style={OptionStyles.difficultyRow}>
        {(["Easy", "Medium", "Hard"] as Difficulty[]).map((level) => (
          <Pressable
            key={level}
            onPress={() => setDifficulty(level)}
            style={[
              OptionStyles.difficultyButton,
              difficulty === level && OptionStyles.activeDifficulty,
            ]}
          >
            <Text>{level}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
