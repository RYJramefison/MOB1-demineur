import { SoundProvider } from "@/contexts/SoundContext";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <SoundProvider>
      <Stack />
    </SoundProvider>
  );
}
