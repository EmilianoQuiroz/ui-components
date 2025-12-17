import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";

const ModalScreen = () => {
  return (
    <ThemedView>
      <ThemedButton
        width="full"
        onPress={() => router.push("/modal/modal-window")}
      >
        Open Modal Window
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
