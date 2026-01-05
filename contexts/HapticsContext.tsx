
import * as Haptics from "expo-haptics";
import React, { createContext, useContext, useState } from "react";

type HapticsContextType = {
  enabled: boolean;
  toggle: (v: boolean) => void;
  impact: () => void;
};

const HapticsContext = createContext<HapticsContextType | null>(null);

export const HapticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [enabled, setEnabled] = useState(true);

  const impact = () => {
    if (!enabled) return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <HapticsContext.Provider
      value={{
        enabled,
        toggle: setEnabled,
        impact,
      }}
    >
      {children}
    </HapticsContext.Provider>
  );
};

export const useHaptics = () => {
  const ctx = useContext(HapticsContext);
  if (!ctx) {
    throw new Error("useHaptics must be used inside HapticsProvider");
  }
  return ctx;
};
