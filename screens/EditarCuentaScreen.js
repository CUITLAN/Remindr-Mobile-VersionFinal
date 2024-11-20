import React, { useState } from "react";
import {
  Box,
  Divider,
  Heading,
  Center,
  NativeBaseProvider,
  ScrollView,
  Input,
  FormControl,
  Text,
} from "native-base";
import ButtonSecondary from "../assets/Botones/ButtonSecondary";
import Alerta from "../Components/NavigationComponents/Alert";

const EditarCuentasScreen = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false); // Controla la visibilidad del Alert.

  const presionado = () => {
    console.log("Se presionó el botón Guardar");
    setIsAlertVisible(true); // Muestra el Alert.
    setTimeout(() => {
      setIsAlertVisible(false); // Oculta el Alert después de 3 segundos.
    }, 3000);
  };

  return (
    <Center w="100%" flex={1} bg="#f5e6ff">
      <Box
        p="4"
        flex={1}
        w="90%"
        mb="5%"
        pb="5"
        maxW="392"
        bg="white"
        borderRadius="10"
        shadow={2}
        mt="5%"
      >
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          textAlign="center"
        >
          Editar Perfil
        </Heading>
        <Divider my="2" bg="#9A9A9A" />

        <ScrollView flex={1}>
          <Box gap={4} display="flex" flexDirection="column" padding={2}>
            <FormControl>
              <Text fontFamily={"Itim"}>Nombre</Text>
              <Input
                placeholder="Alan Orlando"
                placeholderTextColor={"#000"}
                fontSize={16}
                fontFamily={"Itim"}
                variant="outline"
                borderRadius="10"
                borderColor="#d183fc"
                _focus={{ borderColor: "#d183fc" }}
              />
            </FormControl>
            <FormControl>
              <Text fontFamily={"Itim"}>Apellido</Text>
              <Input
                placeholder="Trejo Tinajero"
                placeholderTextColor={"#000"}
                fontSize={16}
                fontFamily={"Itim"}
                variant="outline"
                borderRadius="10"
                borderColor="#d183fc"
                _focus={{ borderColor: "#d183fc" }}
              />
            </FormControl>
            <FormControl>
              <Text fontFamily={"Itim"}>Email</Text>
              <Input
                placeholder="Alan78707@gmail.com"
                placeholderTextColor={"#000"}
                fontSize={16}
                fontFamily={"Itim"}
                variant="outline"
                borderRadius="10"
                borderColor="#d183fc"
                _focus={{ borderColor: "#d183fc" }}
              />
            </FormControl>
            <FormControl>
              <Text fontFamily={"Itim"}>Número</Text>
              <Input
                placeholder="4171171194"
                placeholderTextColor={"#000"}
                fontSize={16}
                fontFamily={"Itim"}
                variant="outline"
                borderRadius="10"
                borderColor="#d183fc"
                _focus={{ borderColor: "#d183fc" }}
              />
            </FormControl>
          </Box>
        </ScrollView>

        <Box alignItems="center" mt={4}>
          <ButtonSecondary text={"Guardar"} onPress={presionado} />
        </Box>
        <Box alignContent={"end"}>
          <Alerta
            isVisible={isAlertVisible}
            onClose={() => setIsAlertVisible(false)}
          />
        </Box>
        {/* Alert Component */}
      </Box>
    </Center>
  );
};

export default () => (
  <NativeBaseProvider>
    <EditarCuentasScreen />
  </NativeBaseProvider>
);
