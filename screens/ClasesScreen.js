import * as React from "react";
import {
  Box,
  Divider,
  Heading,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import ClasesCard from "../Components/ScreenComponents/ClasesComponents";
import ModalClases from "../Components/ScreenComponents/ModalClases";
const ClasesScreen = () => {
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
          Clases
        </Heading>
        <Divider my="2" bg="#9A9A9A" />

        <ScrollView flex={1}>
          <Box padding={2}>
            {/* Aquí puedes mapear las clases */}
            <ModalClases Clase="Ingenieria de Software" />
          </Box>
        </ScrollView>
      </Box>
    </Center>
  );
};

export default () => (
  <NativeBaseProvider>
    <ClasesScreen />
  </NativeBaseProvider>
);
