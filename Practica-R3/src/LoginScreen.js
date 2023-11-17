import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, Button } from "react-native";
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
    <View style={styles.container}>
      <Image source={require("../assets/logo_large.png")} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
});

export default LoginScreen;
