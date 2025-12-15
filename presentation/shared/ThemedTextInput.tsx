import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  placeholder: string;
}

const ThemedTextInput = ({ placeholder, ...rest }: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#696969ff"
      {...rest}
    />
  );
};

export default ThemedTextInput;
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
});
