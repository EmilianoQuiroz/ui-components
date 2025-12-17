import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemeText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import React from "react";

export default function ModalWindowScreen2() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <ThemeText>modal-window2</ThemeText>
      <ThemedButton width="full" onPress={() => router.back()}>
        Go Back
      </ThemedButton>
    </ThemedView>
  );
}
