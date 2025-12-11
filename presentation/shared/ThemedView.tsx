import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  margin?: boolean;
  safeArea?: boolean;
  bgColor?: string;
}

export default function ThemedView({
  style,
  margin = false,
  safeArea = false,
  children,
}: Props) {
  const SafeArea = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: "white",
          flex: 1,
          paddingTop: safeArea ? SafeArea.top : 0,
          margin: margin ? 10 : 0,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
