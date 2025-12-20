import { allRoutes } from "@/constants/Routes";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerShown: true,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Kit UI" }} />
      {allRoutes.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          options={{
            title: route.title,
            headerShown:
              !route.title.includes("Slides") &&
              !route.title.includes("auth 101") &&
              !route.title.includes("auth 102"),
          }}
        />
      ))}
    </Stack>
  );
}
