import { Colors } from "@/constants/Colors";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemeText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";
import React from "react";

import Animated, {
  BounceIn,
  FadeInDown,
  FadeInUp,
  LightSpeedInLeft,
  LightSpeedInRight,
} from "react-native-reanimated";

const AnimatedThemedTextInput =
  Animated.createAnimatedComponent(ThemedTextInput);
const AnimatedThemedButton = Animated.createAnimatedComponent(ThemedButton);

export default function Auth101Screen() {
  return (
    <ThemedView>
      <Animated.Image
        entering={FadeInUp.delay(300).duration(1000).springify()}
        source={require("../../assets/waves/wave-up-to-down.png")}
        style={{ width: "100%", height: 100 }}
      />
      <ThemedButton
        size="lg"
        icon="arrow-back"
        radius="full"
        style={{
          position: "absolute",
          top: 25,
          left: 5,
          backgroundColor: "transparent",
        }}
        onPress={() => router.back()}
      />
      <ThemedView>
        <Animated.Image
          source={require("../../assets/logo/logo.png")}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginVertical: 30,
          }}
          entering={BounceIn.delay(700).duration(1000).springify()}
        />
        <ThemeText
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 40,
          }}
        >
          Login Screen UI
        </ThemeText>

        <ThemedView style={{ gap: 16, marginHorizontal: 16 }}>
          <AnimatedThemedTextInput
            entering={LightSpeedInRight.delay(500).duration(800)}
            placeholder="Username"
          />
          <AnimatedThemedTextInput
            entering={LightSpeedInLeft.delay(700).duration(800)}
            placeholder="Password"
            secureTextEntry
          />
          <AnimatedThemedButton
            entering={FadeInUp.delay(900).duration(800)}
            radius="full"
            width="full"
            color="secondary"
            style={{
              alignSelf: "center",
              marginTop: 24,
            }}
            onPress={() => {}}
          >
            Login
          </AnimatedThemedButton>
        </ThemedView>
        <Animated.View
          entering={FadeInDown.delay(300).duration(1000).springify()}
        >
          <ThemeText style={{ textAlign: "center" }}>
            Don't have an account?
            <Link
              style={{ color: Colors.light.secondary, fontWeight: "bold" }}
              href="/auth-101/signup"
            >
              {" "}
              Sign Up
            </Link>
          </ThemeText>
        </Animated.View>
      </ThemedView>
      <Animated.Image
        source={require("../../assets/waves/wave-down-to-up.png")}
        style={{ width: "100%", height: 100 }}
        entering={FadeInDown.delay(400).duration(1000).springify()}
      />
    </ThemedView>
  );
}
