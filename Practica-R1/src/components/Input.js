import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handlePressIn = () => {
    setIsFocused(true);
  };

  const handlePressOut = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: isFocused ? "blue" : "gray", // Cambia el color del borde en función de isFocused
        },
      ]}
      onFocus={handlePressIn}
      onBlur={handlePressOut}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 30,
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 3,
  },
});

export default Input;
