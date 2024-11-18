import { Button } from 'native-base';
import React from 'react';

const ButtonPrimary = ({ text, size = "md", onPress }) => {
  return (
    <Button
      mt="4"
      size={size}
      bg="#D900FF"
      _pressed={{ bg: "#b260ff" }}
      _text={{
        color: "white",
        fontWeight: "400",
        fontFamily: "Itim",
        fontSize: 18,
      }}
      onPress={onPress} 
    >
      {text}
    </Button>
  );
};

export default ButtonPrimary;
