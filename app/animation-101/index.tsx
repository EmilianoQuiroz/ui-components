import { Colors } from "@/constants/Colors";
import { useAnimation } from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated, Easing } from "react-native";

const Animation101Screen = () => {
  const {
    fadeIn,
    fadeOut,
    animatedOpacity,
    animatedTop,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemedView
      margin
      style={{
        gap: 36,
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          width: 150,
          height: 150,
          backgroundColor: Colors.light.primary,
          borderRadius: 40,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />
      <ThemedButton
        width="full"
        color="tertiary"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            toValue: 0,
            duration: 1500,
            easing: Easing.bounce,
          });
        }}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton
        width="full"
        color="secondary"
        onPress={() => {
          fadeOut({});
        }}
      >
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
