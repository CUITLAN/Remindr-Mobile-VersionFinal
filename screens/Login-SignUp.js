import * as React from "react";
import {
  Box,
  Text,
  Divider,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Image,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { Fonts } from "../constant/fonts";
import ButtonPrimary from "../assets/Botones/ButtonPrimary";

const LoginorSign = () => {
    const handleButtonClick = () =>{
        console.log("Se preciono el boton")
    }

  return (
    <Center w="100%" flex={1} bg="#f5e6ff">
      <Box mb="2">
        <Image
          shadow={2}
          source={require("../assets/logo/Logo.png")}
          alt="Este es el logo"
          size="xl"
        />
        
      </Box>

      <Box
        safeArea
        p="4"
        mb="162"
        height="568"
        w="90%"
        maxW="392"
        bg="white"
        borderRadius="10"
        shadow={2}
      >
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          textAlign="center"
        >
          Iniciar Sesión
        </Heading>
        <Divider my="2" bg="#9A9A9A" />

        <VStack space={4} mt="5">
          <FormControl>
            <Input
              fontFamily={Fonts.Itim}
              placeholder="Correo Electrónico"
              fontSize={16}
              variant="outline"
              borderColor="#d183fc"
              _focus={{
                borderColor: "#d183fc",
              }}
            />
          </FormControl>
          <FormControl>
            <Input
              fontSize={16}
              fontFamily={Fonts.Itim}
              placeholder="Contraseña"
              type="password"
              variant="outline"
              borderColor="#d183fc"
              _focus={{
                borderColor: "#d183fc",
              }}
            />
            <Box mt="68">
                {/* igual aca falta que cuando se precione el boton se compare los datos y se mande a iniciar sesion */}
              <ButtonPrimary
                text={"Iniciar Sesion"}
                onPress={handleButtonClick}
              />
              <Link
                // aca falta de el a donde te va a mandar Una vez que se precione
                _text={{
                  fontSize: "15",
                  fontWeight: "400",
                  color: "#007EFF",
                  fontFamily: "Itim"
                }}
                height="35"
                alignSelf="center"
                mt="19"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>
          </FormControl>
          
        </VStack>
      </Box>
    </Center>
  );
};

// Exportamos el componente LoginorSign
export default () => (
  <NativeBaseProvider>
    <LoginorSign />
  </NativeBaseProvider>
);
