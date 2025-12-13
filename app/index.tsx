import {
  animationMenuRoutes,
  authRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemeText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { ScrollView, View } from "react-native";

const ComponentsApp = () => {
  return (
    <ScrollView>
      <ThemedView safeArea={false} margin={true}>
        <ThemeText size="lg" textType="bold" color="blue">
          UI Components
        </ThemeText>
        <View style={{ height: 16 }} />
        <ThemeText
          size="md"
          textType="regular"
          color="black"
          style={{ marginBottom: 16 }}
        >
          All my custom UI components in a single app.
        </ThemeText>
        {animationMenuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === animationMenuRoutes.length - 1}
          />
        ))}
        <View style={{ height: 16 }} />

        {authRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === authRoutes.length - 1}
          />
        ))}
        <View style={{ height: 16 }} />

        {uiMenuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === uiMenuRoutes.length - 1}
          />
        ))}
        <View style={{ height: 16 }} />
        {menuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === menuRoutes.length - 1}
          />
        ))}
      </ThemedView>
    </ScrollView>
  );
};
export default ComponentsApp;
