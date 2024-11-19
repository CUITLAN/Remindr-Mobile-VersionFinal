import * as React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  Button,
  Image,
  Center,
  NativeBaseProvider,
} from "native-base";

const Login = () => {
  const handleLoginClick = () => {
    // Aquí irá la lógica para navegar a la pantalla de inicio de sesión
    console.log("Navegar a Iniciar Sesión");
  };

  const handleRegisterClick = () => {
    // Aquí irá la lógica para navegar a la pantalla de registro
    console.log("Navegar a Registrarse");
  };

  return (
    <Center 
        display = "flex" 
        w="100%"  
        padding= "137px 0px 163px 0px" 
        flex-direction= "column" 
        alignItems= "center" 
        bg="#66147C"
        //opacity="1"
        >
      <Box 
        alignItems="center" 
        display= "flex" 
        width= "412px" 
        height= "617px" 
        flexDirection = "column" 
        gap = "35px">

        <Image
          source={require("../assets/logo/Logo.png")}
          height= "181px"
          width="181"
          align-self= "stretch"
        />
        <Heading
          display="flex"
          height= "85px"
          flexDirection= "colum"
          justifyContent="center"
          alignSelf= "stretch"
          color="#FFF"
          fontSize="36px"
          fontFamily="Itim"
          textAlign="center"
          fontStyle= "normal"
          fontWeight= "400"
         // lineHeight= "normal"
        >
          ReMindR
        </Heading>
        <Text
          display="flex"
          height= "85px"
          flexDirection= "colum"
          justifyContent="center"
          alignSelf= "stretch"
          color="white"
          fontSize="20px"
          fontFamily="Itim"
          textAlign="center"
          fontStyle= "normal"
          fontWeight= "400"
          //lineHeight= "normal"
        >
          Notificaciones inteligentes para estudiantes inteligentes
        </Text>
        <Box 
            display= "flex"
            height= "165px"  
            flexDirection= "colum" 
            justifyContent="center" 
            alignItems="center" 
            gap = "33px"
            > 
            
            <Button
                bg="#06BA00"
                borderRadius="10"
                display= "flex"
                width= "143"
                height= "50px"
                padding= "0px 22px"
                justifyContent= "center"
                alignItems= "center"
                gap= "10px"
                flexShrink= "0"
                alignSelf= "stretch"
                fontFamily="Itim" 
                fontSize="20"
                onPress={handleLoginClick}
            >
                <Text
                    fontFamily="Itim"
                    fontSize="20px"
                    color="white" 
                >
                    Iniciar Sesión
                </Text>
            </Button>
            <Button
                bg="#06BA00"
                borderRadius="10"
                display= "flex"
                width= "143"
                height= "50px"
                padding= "0px 22px"
                justifyContent= "center"
                alignItems= "center"
                gap= "10px"
                flexShrink= "0"
                alignSelf= "stretch"
                fontFamily="Itim"
                onPress={handleRegisterClick}
                
            >
            <Text
                    fontFamily="Itim"
                    fontSize="20px"
                    color="white" 
                >
                    Registrarse
                </Text>
            </Button>
        </Box>  
      </Box>
    </Center>
  );
};

export default () => (
  <NativeBaseProvider>
    <Login />
  </NativeBaseProvider>
);
