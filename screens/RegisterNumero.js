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

const RegisterNumero = () => {
  const handleButtonClick = () => {
    // Lógica para enviar el código
    console.log("Se presionó el botón para enviar el código");
  };

  return (
    <Center w="100%" flex={1} bg="#f5e6ff">
      <Box
        safeArea
        p="1"
        mb="116"
        ml="10"
        mr="10"
        height="85%"
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
          Introduce tu número de teléfono. Este será el que recibirá las
          notificaciones y debe tener una cuenta de Whatsapp.
        </Text>

        <VStack 
            space={8} 
            mt="5" 
            padding="8px 29px 8px 27px" 
            alignItems="center">
              
          <FormControl
            display= "flex"
            justifyContent= "center"
            alignItems = "center"
            gap = "32px"
            alignSelf= "stretch"
            flexDirection= "row">
            
            

            <Input
              w= "100px"
              fontFamily="Itim"
              placeholder="Lada"
              fontSize={16}
              variant="outline"
              borderRadius="10"
              borderColor="#D900FF"
              _focus={{
                borderColor: "#D900FF",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="add" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
            />
          
            <Input
              w = "177px"
              fontFamily="Itim"
              placeholder="Número"
              fontSize={16}
              variant="outline"
              borderRadius="10"
              borderColor="#D900FF"
              _focus={{
                borderColor: "#D900FF",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="phone" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
            />
          </FormControl>
          <Box
            padding="116">
            
          </Box>

          <Box 
            
            w = "176"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            mt="10"
            >

            <ButtonPrimary text={"Enviar Código"} onPress={handleButtonClick} />
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

// Exportamos el componente RegisterNumero
export default () => (
  <NativeBaseProvider>
    <RegisterNumero />
  </NativeBaseProvider>
);
