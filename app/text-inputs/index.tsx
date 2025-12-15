import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const isIOS = Platform.OS === "ios";
const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  return (
    <KeyboardAvoidingView
      behavior={isIOS ? "height" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <ThemedView
          margin
          style={{ flex: 1, justifyContent: "center", padding: 20, gap: 30 }}
        >
          <ThemedTextInput
            placeholder="name"
            autoCapitalize={"words"}
            autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          <ThemedTextInput
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize={"none"}
            autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <ThemedTextInput
            placeholder="password"
            secureTextEntry
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
          <ThemedTextInput
            placeholder="phone"
            keyboardType="phone-pad"
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
          <ThemedButton
            color="primary"
            onPress={() => console.log(form)}
            width="full"
            style={{ alignSelf: "center", marginTop: 30, borderRadius: 30 }}
          >
            Submit
          </ThemedButton>
          <ThemedView>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedView>
          <ThemedView>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedView>
          <ThemedView>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedView>
          <ThemedView>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
