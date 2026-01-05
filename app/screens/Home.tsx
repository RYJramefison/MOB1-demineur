import { useHaptics } from "@/contexts/HapticsContext";
import { indexStyles } from "@/styles/index-styles";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Home() {
  const { impact } = useHaptics();
  return (
    <View style={indexStyles.container}>
      <Image
        source={require("@/assets/bomb.png")}
        style={indexStyles.bombImage}
        resizeMode="contain"
      />

      <Text style={indexStyles.menuTitle}>Demineur</Text>

      <Pressable style={indexStyles.menuButton} onPress={() => impact()}>
        <Link href="/screens/demineur">
          <Text style={indexStyles.menuText}>New Game</Text>
        </Link>
      </Pressable>

      <Pressable style={indexStyles.menuButton} onPress={() => impact()}>
        <Link href="/screens/demineur">
          <Text style={indexStyles.menuText}>Continue Game</Text>
        </Link>
      </Pressable>

      <Pressable style={indexStyles.menuButton} onPress={() => impact()}>
        <Link href="/screens/HelpGame">
          <Text style={indexStyles.menuText}>Help</Text>
        </Link>
      </Pressable>

      <Pressable style={indexStyles.menuButton} onPress={() => impact()}>
        <Link href="/screens/Option">
          <Text style={indexStyles.menuText}>Option</Text>
        </Link>
      </Pressable>
    </View>
  );
}
