import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';
// EN ESTE COMPONENTE TENDRIA QUE HABER UN MAP IGUAL PARA QUE TODO JALE , SE TIENE QUE MODIFICAR EL PROP PARA QUE SE RECIBAN LOS DAOTS
const ClasesCard = ({Cuenta="Analisis y diseño de software", Clase="Alanqwq78707@gmaidfdfdl.com"}) => {
  return (
    <Box alignItems="center">
      <Box
      mt={3}
        width="110%"
        rounded="lg"
        maxH="118"
        display={"flex"}
        borderColor="#D8B0E2"
        borderWidth="3"
        
        borderRadius={10}>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            {Cuenta}
            </Heading>
            <Text
              fontSize="16"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {Clase}
            </Text>
          </Stack>

          
        </Stack>
      </Box>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ClasesCard />
      </Center>
    </NativeBaseProvider>
  );
};