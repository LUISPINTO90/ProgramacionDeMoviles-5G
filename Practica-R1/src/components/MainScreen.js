// MainScreen.js
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Name, Input, Button, CustomSwitch } from "./index";
import { StatusBar } from "expo-status-bar";

const MainScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    const alertMessage = `${inputValue}`;
    alert(alertMessage);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Name />
      <Input
        placeholder="Escribe algo..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button onPress={handleButtonClick}>Mostrar Alert</Button>
      <CustomSwitch />
      <StatusBar style="auto" />
    </View>
  );
};

export default MainScreen;
