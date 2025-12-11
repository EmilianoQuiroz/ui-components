import Ionicon from "@expo/vector-icons/Ionicons";
import { Href, router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import ThemeText from "../shared/ThemeText";

interface Props {
  title: string;
  icon: keyof typeof Ionicon.glyphMap;
  name: string;

  isFirst?: boolean;
  isLast?: boolean;
}
export default function MenuItem({
  title,
  icon,
  name,
  isFirst = false,
  isLast = false,
}: Props) {
  const [routeName] = name.split("/");
  return (
    <Pressable
      onPress={() => router.push(routeName as Href)}
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10,
        }),
        backgroundColor: "#f0f0f0",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Ionicon
          name={icon}
          size={24}
          color="blue"
          style={{ marginRight: 10 }}
        />
        <ThemeText size="md" color="blue">
          {title}
        </ThemeText>
      </View>
    </Pressable>
  );
}
