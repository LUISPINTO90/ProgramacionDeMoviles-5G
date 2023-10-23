import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    const nextState = !isEnabled;
    console.warn(`El switch está en ${nextState}`);
    setIsEnabled(nextState);
  };

  return (
    <Switch
      trackColor={{ false: "red", true: "green" }}
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.switch}
    />
  );
};

const styles = StyleSheet.create({
  switch: {
    marginTop: 20,
    width: 80,
    height: 40,
  },
});

export default CustomSwitch;
