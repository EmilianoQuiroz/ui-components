import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { Alert, StyleSheet } from "react-native";

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  return (
    <ThemedView margin style={styles.container}>
      <ThemedButton
        color="primary"
        width="full"
        onPress={createTwoButtonAlert}
        style={{ borderRadius: 30 }}
      >
        Alert 1
      </ThemedButton>
      <ThemedButton
        buttonType="outline"
        color="secondary"
        width="full"
        onPress={createThreeButtonAlert}
        style={{ borderRadius: 30 }}
      >
        Alert 2
      </ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
});
