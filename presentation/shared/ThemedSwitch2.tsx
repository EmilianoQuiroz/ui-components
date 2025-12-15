import { useCallback, useEffect } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

interface Props {
  active?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
  duration?: number;
  scale?: number;
  onToggle?: (isActive: boolean) => void;
  style?: ViewStyle;
}

export default function ThemedSwitch2({
  active,
  activeColor = "#4CAF50",
  inactiveColor = "#ccc",
  thumbColor = "#fff",
  duration = 350,
  scale = 1,
  onToggle,
  style,
}: Props) {
  const isActive = useSharedValue(active);

  const progress = useDerivedValue(() => {
    return withTiming(isActive.value ? 1 : 0, { duration });
  }, [isActive]);

  useEffect(() => {
    isActive.value = active;
  }, [active]);

  const handleToggle = useCallback(() => {
    isActive.value = !isActive.value;
    onToggle?.(!isActive.value);
  }, [onToggle, isActive]);

  const thumbStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(isActive.value ? 22 : 1, {
            damping: 15,
            stiffness: 150,
          }),
        },
      ],
    };
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [inactiveColor, activeColor]
    );
    return { backgroundColor };
  });

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(isActive.value ? scale * 1.05 : scale, {
            duration: 150,
          }),
        },
      ],
    };
  });
  return (
    <TouchableOpacity onPress={handleToggle}>
      <Animated.View
        style={[styles.container, backgroundColorStyle, scaleStyle, style]}
      >
        <Animated.View
          style={[styles.circle, thumbStyles, { backgroundColor: thumbColor }]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 20,
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: "#ccc",
    padding: 2,
    elevation: 2,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
});
