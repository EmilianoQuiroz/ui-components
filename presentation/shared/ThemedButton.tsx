import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  onPress?: () => void;
  size?: "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger";
  buttonType?: "fill" | "outline" | "disabled";
  children?: string;
  width?: "full" | "content";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  icon?: keyof typeof Ionicons.glyphMap;
  iconPosition?: "left" | "right" | "only";
  iconSize?: number;
}

export default function ThemedButton({
  onPress,
  style,
  buttonType = "fill",
  size = "md",
  color,
  children,
  width = "content",
  radius = "md",
  icon,
  iconPosition = "left",
  iconSize,
  ...rest
}: Props) {
  const getTextColor = () => {
    if (buttonType === "outline" && color) {
      return color === "primary"
        ? Colors.light.primary
        : color === "secondary"
        ? Colors.light.secondary
        : color === "tertiary"
        ? Colors.light.tertiary
        : color === "success"
        ? Colors.light.success
        : color === "warning"
        ? Colors.light.warning
        : color === "danger"
        ? Colors.light.danger
        : "blue";
    }
    return buttonType === "fill" ? "white" : "gray";
  };

  const textColor = getTextColor();
  const defaultIconSize =
    iconSize || (size === "sm" ? 16 : size === "md" ? 20 : 24);

  return (
    <Pressable
      
      onPress={onPress}
      style={(state) => [
        {
          backgroundColor:
            buttonType === "outline"
              ? "transparent"
              : buttonType === "disabled"
              ? "#d1ceceff"
              : color === "primary"
              ? Colors.light.primary
              : color === "secondary"
              ? Colors.light.secondary
              : color === "tertiary"
              ? Colors.light.tertiary
              : color === "success"
              ? Colors.light.success
              : color === "warning"
              ? Colors.light.warning
              : color === "danger"
              ? Colors.light.danger
              : "blue",
          paddingVertical:
            size === "sm" ? 8 : size === "md" ? 12 : size === "lg" ? 16 : 12,
          paddingHorizontal:
            size === "sm" ? 8 : size === "md" ? 12 : size === "lg" ? 16 : 12,
          borderRadius:
            radius === "none"
              ? 0
              : radius === "sm"
              ? 5
              : radius === "md"
              ? 10
              : radius === "lg"
              ? 15
              : radius === "full"
              ? "100%"
              : 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderWidth: buttonType === "outline" ? 1 : 0,
          borderColor:
            buttonType === "outline" && color
              ? color === "primary"
                ? Colors.light.primary
                : color === "secondary"
                ? Colors.light.secondary
                : color === "tertiary"
                ? Colors.light.tertiary
                : color === "success"
                ? Colors.light.success
                : color === "warning"
                ? Colors.light.warning
                : color === "danger"
                ? Colors.light.danger
                : "blue"
              : "transparent",
          opacity: buttonType === "disabled" ? 0.6 : 1 && (state.pressed ? 0.5 : 1),
          width: width === "full" ? "100%" : "auto",
          alignSelf: width === "content" ? "flex-start" : "stretch",
        },
        typeof style === "function" ? style(state) : style,
      ]}
      {...rest}
    >
      {icon && iconPosition === "left" && (
        <Ionicons
          name={icon}
          size={defaultIconSize}
          color={textColor}
          style={{ marginRight: 8 }}
        />
      )}

      {iconPosition !== "only" && children && (
        <Text
          style={{
            color: textColor,
            fontSize: size === "sm" ? 14 : size === "md" ? 16 : 20,
            fontWeight: "600",
          }}
        >
          {children}
        </Text>
      )}

      {icon && iconPosition === "right" && (
        <Ionicons
          name={icon}
          size={defaultIconSize}
          color={textColor}
          style={{ marginLeft: 8 }}
        />
      )}

      {icon && iconPosition === "only" && (
        <Ionicons name={icon} size={defaultIconSize} color={textColor} />
      )}
    </Pressable>
  );
}
