import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  placeholder: string;
}

const ThemedTextInput = React.forwardRef<TextInput, Props>(
  ({ placeholder, style, ...rest }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor="#696969ff"
        {...rest}
      />
    );
  }
);

ThemedTextInput.displayName = "ThemedTextInput";

export default ThemedTextInput;
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
});
