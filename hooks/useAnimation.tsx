import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 1000,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callBack = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callBack);
  };

  const fadeOut = ({
    duration = 1000,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callBack = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callBack);
  };

  const startMovingTopPosition = ({
    initialValue = -300,
    toValue = 300,
    duration = 1000,
    useNativeDriver = true,
    easing = Easing.ease,
    callBack = () => {},
  }) => {
    animatedTop.setValue(initialValue);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callBack);
  };
  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
