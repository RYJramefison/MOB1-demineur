import { OptionStyles } from "@/styles/option-styles";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Switch, Text, View } from "react-native";

type Difficulty = "Easy" | "Medium" | "Hard";

export default function Option() {
  const [volume, setVolume] = useState(50);
  const [vibration, setVibration] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
  const [gridSize, setGridSize] = useState(8); // nombre de cases par ligne
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    let backgroundSound: Audio.Sound;

    const loadSound = async () => {
      if (isSoundEnabled) {
        const { sound } = await Audio.Sound.createAsync(
          require("@/assets/sounds/game-music.mp3")
        );
        backgroundSound = sound;
        setSound(sound);
        await backgroundSound.playAsync();
        backgroundSound.setIsLoopingAsync(true);
      }
    };

    loadSound();

    return () => {
      if (backgroundSound) {
        backgroundSound.unloadAsync();
      }
    };
  }, [isSoundEnabled]);

  useEffect(() => {
    if (sound) {
      sound.setVolumeAsync(volume / 100);
    }
  }, [volume, sound]);

  return (
    <View style={OptionStyles.container}>
      <Text style={OptionStyles.title}>Options</Text>

      {/* Activer/Désactiver le son */}
      <View style={OptionStyles.optionRow}>
        <Text style={OptionStyles.label}>Enable Sound</Text>
        <Switch value={isSoundEnabled} onValueChange={setIsSoundEnabled} />
      </View>

      {/* Volume */}
      <View style={OptionStyles.optionBlock}>
        <Text style={OptionStyles.label}>Sound Volume</Text>
        <Text style={OptionStyles.value}>{volume}%</Text>

        <Slider
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={volume}
          onValueChange={setVolume}
          disabled={!isSoundEnabled} // Désactiver le slider si le son est désactivé
        />
      </View>

      {/* Vibration */}
      <View style={OptionStyles.optionRow}>
        <Text style={OptionStyles.label}>Vibration</Text>
        <Switch value={vibration} onValueChange={setVibration} />
      </View>

      {/* Difficulty */}
      <View style={OptionStyles.optionBlock}>
        <Text style={OptionStyles.label}>Difficulty</Text>

        <View style={OptionStyles.difficultyRow}>
          {(["Easy", "Medium", "Hard"] as Difficulty[]).map((level) => (
            <Text
              key={level}
              style={[
                OptionStyles.difficultyButton,
                difficulty === level && OptionStyles.activeDifficulty,
              ]}
              onPress={() => setDifficulty(level)}
            >
              {level}
            </Text>
          ))}
        </View>
      </View>

      {/* Grid size */}
      <View style={OptionStyles.optionBlock}>
        <Text style={OptionStyles.label}>Grid Size</Text>
        <Text style={OptionStyles.value}>{gridSize} x {gridSize}</Text>

        <Slider
          minimumValue={6}
          maximumValue={16}
          step={1}
          value={gridSize}
          onValueChange={setGridSize}
        />
      </View>
    </View>
  );
}
