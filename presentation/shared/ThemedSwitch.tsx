import { Colors } from "@/constants/Colors";
import { Platform, Pressable, Switch } from "react-native";
import ThemeText from "./ThemedText";

interface Props {
  text?: string;
  value?: boolean;

  onValueChange?: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

function ThemedSwitch({ text, value, onValueChange }: Props) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: value ? 1 : 0.5,
        marginVertical: 8,
      }}
    >
      {text && <ThemeText textType="semibold">{text}</ThemeText>}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? Colors.dark.primary : Colors.dark.secondary}
        trackColor={{
          false: Colors.light.primary,
          true: Colors.light.secondary,
        }}
      />
    </Pressable>
  );
}

export default ThemedSwitch;
