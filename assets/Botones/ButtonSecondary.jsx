import { Button } from 'native-base';
import React from 'react';

const ButtonSecondary = ({ text, onPress }) => {
  return (
    <Button
      mt="4"
      size="md"
      borderRadius="4"
      height={50}
      width={199}
      bg="#9747FF"
      _pressed={{ bg: "BE8DFD" }}
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

export default ButtonSecondary;
