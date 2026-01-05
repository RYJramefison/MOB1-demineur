import { OptionStyles } from "@/styles/option-styles";
import Slider from "@react-native-community/slider";
import { Switch, Text, View } from "react-native";

import { useSound } from "@/contexts/SoundContext";

export default function Option() {
  const { isEnabled, toggleSound, volume, setVolume } = useSound();

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
    </View>
  );
}
