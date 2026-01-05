import { GameProvider } from "@/contexts/GameContext";
import { HapticsProvider } from "@/contexts/HapticsContext";
import { SoundProvider } from "@/contexts/SoundContext";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <SoundProvider>
      <HapticsProvider>
        <GameProvider>
          <Stack />
        </GameProvider>
      </HapticsProvider>
    </SoundProvider>
  );
}
