import React, { useEffect, useState } from "react";
import {
  Stack,
  Alert,
  IconButton,
  HStack,
  VStack,
  CloseIcon,
  Text,
  PresenceTransition,
} from "native-base";

const Alerta = ({ isVisible, onClose }) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShow(true); // Muestra el componente
      const timer = setTimeout(() => {
        setShow(false); // Inicia el fade-out después de 3 segundos
        onClose(); // Llama a la función para ocultar completamente después
      }, 3000);

      return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta
    }
  }, [isVisible, onClose]);

  if (!show) return null; // Si no se debe mostrar, no renderiza nada

  return (
    <PresenceTransition
      visible={show}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 250, // Duración del fade-in
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 500, // Duración del fade-out
        },
      }}
    >
      <Stack
        position="absolute"
        top={4}
        w="90%"
        zIndex={10}
        alignSelf="center"
      >
        <Alert w="100%" status={"success"}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {"Se modificó tu cuenta."}
                </Text>
              </HStack>
             
            </HStack>
          </VStack>
        </Alert>
      </Stack>
    </PresenceTransition>
  );
};

export default Alerta;
