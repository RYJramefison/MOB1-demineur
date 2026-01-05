import { GameProvider } from "@/contexts/GameContext";
import { SoundProvider } from "@/contexts/SoundContext";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <SoundProvider>
      <GameProvider>
        <Stack />
      </GameProvider>
    </SoundProvider>
  );
}
