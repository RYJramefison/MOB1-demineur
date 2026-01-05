import { Audio } from "expo-av";
import React, { createContext, useContext, useEffect, useState } from "react";

type SoundContextType = {
  isEnabled: boolean;
  volume: number;
  toggleSound: (value: boolean) => void;
  setVolume: (value: number) => void;
};

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [volume, setVolumeState] = useState(0.5);

  useEffect(() => {
    const handleSound = async () => {
      // 🔴 SON DÉSACTIVÉ → STOP + UNLOAD
      if (!isEnabled) {
        if (sound) {
          await sound.stopAsync();
          await sound.unloadAsync();
          setSound(null);
        }
        return;
      }
  
      // 🟢 SON ACTIVÉ → CHARGER SI ABSENT
      if (!sound) {
        const { sound: newSound } = await Audio.Sound.createAsync(
          require("@/assets/sounds/game-music.mp3"),
          { isLooping: true, volume }
        );
  
        setSound(newSound);
        await newSound.playAsync();
      }
    };
  
    handleSound();
  }, [isEnabled]);
  
  useEffect(() => {
    if (sound) {
      sound.setVolumeAsync(volume);
    }
  }, [volume]);

  useEffect(() => {
    if (sound) {
      sound.setVolumeAsync(volume);
    }
  }, [volume]);

  return (
    <SoundContext.Provider
      value={{
        isEnabled,
        volume,
        toggleSound: setIsEnabled,
        setVolume: (v) => setVolumeState(v / 100),
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used inside SoundProvider");
  }
  return context;
};
