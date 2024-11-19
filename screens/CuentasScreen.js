import * as React from "react";
import { Box, Divider, Heading, Center, NativeBaseProvider, ScrollView, Button } from "native-base";
import CuentasComponents from "../Components/ScreenComponents/CuentasComponents";
import ButtonSecondary from "../assets/Botones/ButtonSecondary";

const CuentasScreen = () => {
  const presionado = () =>{
    console.log("Se preciono el agregar cuenta")
  }
  return (
    <Center w="100%" flex={1} bg="#f5e6ff">
      <Box
        p="4"
        pb="16"
        mb="116"
        ml="10"
        mr="10"
        height="723"
        w="90%"
        maxW="392"
        bg="white"
        borderRadius="10"
        shadow={2}
        mt="95px"
        justifyContent="space-between" 
      >
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          textAlign="center"
        >
          Cuentas
        </Heading>
        <Divider my="2" bg="#9A9A9A" />

        <ScrollView flex={1}> 
          {/* Se tendria que hacer el mapeo para que saque el cuentasComponent de cada cuenta */}
          <Box display="flex" flexDirection="column" space={4} padding={2}>
            <CuentasComponents />
            <CuentasComponents />
            <CuentasComponents />
          </Box>
        </ScrollView>

        
        <Box alignItems="center" mt={4}>
          <ButtonSecondary text={"Agregar Cuenta"} onPress={presionado} />
        </Box>
      </Box>
    </Center>
  );
};

export default () => (
  <NativeBaseProvider>
    <CuentasScreen />
  </NativeBaseProvider>
);
