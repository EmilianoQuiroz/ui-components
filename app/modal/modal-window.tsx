import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemeText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ModalWindowScreen() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <ThemeText>modal-window</ThemeText>
      <ThemedButton
        width="full"
        onPress={() => router.push("/modal/modal-window2")}
      >
        Go To Modal 2
      </ThemedButton>
      <ThemedButton width="full" onPress={() => router.back()}>
        Go Back
      </ThemedButton>
    </ThemedView>
  );
}
