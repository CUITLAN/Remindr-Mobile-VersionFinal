import React, { useState, useRef } from 'react';
import { Pressable, Text } from 'react-native';
import { HStack, Icon, AlertDialog, Button } from 'native-base';
import  CerrarSesion  from '../icons/CerrarSesion';  // Asegúrate de tener el path correcto

const ButtonCerrarSesion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Pressable
        px="5"
        py="3"
        rounded="md"
        bg="transparent"
        onPress={onOpen}  // Abre el modal al hacer clic
      >
        <HStack space={4} justifyContent="left" gap={7}>
          <Icon color="#1F2937" size="5" as={CerrarSesion("Cerrar Sesion")} />
          <Text
            fontWeight="400"
            fontSize="16px"
            color="#1F2937"
            fontFamily="Itim"
            lineHeight="20px"
          >
            Cerrar Sesión
          </Text>
        </HStack>
      </Pressable>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}  // Mostrar modal si `isOpen` es true
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Cerrar Sesión</AlertDialog.Header>
          <AlertDialog.Body>
            ¿Estás seguro de que quieres cerrar sesión?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => {
                  console.log("Sesión cerrada");
                  onClose();  // Cerrar el modal después de la acción
                }}
              >
                Confirmar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
}

export default ButtonCerrarSesion;
