// LoginScreen.js
import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Input, Button } from "./index";
import { Actions } from "react-native-router-flux";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const isValid = validateForm();
    if (isValid) {
      alert("Inicio de sesión exitoso");
      Actions.main();
    }
  };

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  const validateForm = () => {
    if (!emailRegex.test(email)) {
      alert("Correo electrónico no válido");
      return false;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      alert("La contraseña debe contener mayúsculas y minúsculas.");
      return false;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      alert(
        "La contraseña debe contener al menos un carácter especial (!@#$%^&*)."
      );
      return false;
    }

    if (!email || !password) {
      alert("Ambos campos son obligatorios.");
      return false;
    }

    return true;
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require("../../assets/logo_large.png")}
        style={styles.logo}
      />
      <Input
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button onPress={handleLogin}>Iniciar Sesión</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
});

export default LoginScreen;
