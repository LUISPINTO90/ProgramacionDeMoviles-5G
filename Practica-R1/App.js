import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Alert, Platform } from "react-native";
import { Name, Input, Button, CustomSwitch } from "./src/components";
import { NativeWindStyleSheet } from "nativewind";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    const alertMessage = `${inputValue}`;
    if (Platform.OS === "web") {
      alert(alertMessage);
    } else {
      Alert.alert("Alerta", alertMessage);
    }
  };

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

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
}
