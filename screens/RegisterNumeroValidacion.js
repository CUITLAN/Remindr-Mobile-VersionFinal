import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Divider,
  Heading,
  VStack,
  FormControl,
  Input,
  Text,
  Center,
  NativeBaseProvider,
  Icon,
} from "native-base";
import ButtonPrimary from "../assets/Botones/ButtonPrimary";

const RegisterNumeroValidacion = () => {
  const handleVerifyClick = () => {
    // Lógica para verificar el código
    console.log("Se presionó el botón para verificar el código");
  };

  const handleResendClick = () => {
    // Lógica para reenviar el código
    console.log("Se presionó el botón para reenviar el código");
  };

  return (
    <Center w="100%" flex={1} bg="#f5e6ff">
      <Box
        safeArea
        p="4"
        mb="116"
        ml="10"
        mr="10"
        height="723"
        w="90%"
        maxW="392"
        bg="white"
        borderRadius="10"
        shadow={2}
        mt="75px"
      >
        <Heading
          fontSize="32px"
          fontWeight="400"
          color="#000"
          textAlign="center"
          fontFamily="Itim"
        >
          Número de Teléfono
        </Heading>
        <Divider my="2" bg="#9A9A9A" />
        <Text
          textAlign="center"
          mt="3"
          fontSize="16"
          fontWeight="400"
          fontFamily="Itim"
          color="gray.600"
        >
          Ingresa el código de seguridad de 6 dígitos que se envió a tu número
          de teléfono.
        </Text>

        <VStack
          space={8}
          mt="5"
          padding="8px 29px 8px 27px"
          alignItems="center"
        >
          <FormControl>
            <Input
              fontFamily="Itim"
              placeholder="Código"
              fontSize={16}
              variant="outline"
              borderRadius="10"
              borderColor="#D900FF"
              _focus={{
                borderColor: "#D900FF",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
            />
          </FormControl>

          <Box
            w="176"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            {/* Botón para verificar */}
            <ButtonPrimary text={"Verificar"} onPress={handleVerifyClick} />
          </Box>

          <Text
            fontSize="16"
            fontWeight="400"
            fontFamily="Itim"
            color="#000"
            textAlign="center"
          >
            ¿No se envió un código de seguridad?
          </Text>

          <Box
            w="176"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            {/* Botón para reenviar el código */}
            <ButtonPrimary text={"Reenviar código"} onPress={handleResendClick} />
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

// Exportamos el componente RegisterNumeroValidacion
export default () => (
  <NativeBaseProvider>
    <RegisterNumeroValidacion />
  </NativeBaseProvider>
);
