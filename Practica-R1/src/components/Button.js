import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
      }}
      {...props}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          padding: 5,
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
