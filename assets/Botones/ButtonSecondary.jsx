import { Button } from 'native-base';
import React from 'react';

const ButtonSecondary = ({ text, onPress }) => {
  return (
    <Button
      
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

const ButtonSecondaryPequeño = ({ text, onPress }) => {
  return (
    <Button
      size="s"
      borderRadius="4"
      height={35}
      width={20}
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

// Exporta ambos componentes de manera nombrada
export { ButtonSecondary, ButtonSecondaryPequeño };
