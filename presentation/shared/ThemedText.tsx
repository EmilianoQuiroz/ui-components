import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  size?: "sm" | "md" | "lg";
  textType?: "regular" | "semibold" | "bold";
  color?: string;
}
export default function ThemeText({
  children,
  style,
  color = "black",
  textType = "regular",
  size = "md",
}: Props) {
  return (
    <Text
      style={[
        {
          fontWeight:
            textType === "semibold"
              ? "600"
              : textType === "bold"
              ? "700"
              : "400",
          fontSize: size === "sm" ? 14 : size === "md" ? 16 : 20,
          color: color,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
