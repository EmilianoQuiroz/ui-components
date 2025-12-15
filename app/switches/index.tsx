import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedSwitch2 from "@/presentation/shared/ThemedSwitch2";
import ThemeText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View } from "react-native";

const Switches = () => {
  const [state, setIsState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin>
      <ThemedView>
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setIsState({ ...state, isActive: value })}
        />
        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(value) => setIsState({ ...state, isHungry: value })}
        />
        <ThemedSwitch
          text="Feliz"
          value={state.isHappy}
          onValueChange={(value) => setIsState({ ...state, isHappy: value })}
        />
      </ThemedView>
      <ThemedView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 8,
          }}
        >
          <ThemeText textType="semibold">Opcion 1</ThemeText>
          <ThemedSwitch2
            active={true}
            activeColor="#3f11d6ff"
            inactiveColor="#888"
            onToggle={(v) => console.log(v)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 8,
          }}
        >
          <ThemeText textType="semibold">Opcion 2</ThemeText>
          <ThemedSwitch2
            active={true}
            activeColor="#37f5afff"
            inactiveColor="#888"
            onToggle={(v) => console.log(v)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 8,
          }}
        >
          <ThemeText textType="semibold">Opcion 3</ThemeText>
          <ThemedSwitch2
            active={true}
            activeColor="#f53737ff"
            inactiveColor="#888"
            onToggle={(v) => console.log(v)}
          />
        </View>
      </ThemedView>
    </ThemedView>
  );
};
export default Switches;
