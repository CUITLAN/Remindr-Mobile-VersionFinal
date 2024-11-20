import * as React from 'react';
import { Box, Divider, Heading,Text, Select, Input, CheckIcon, Icon, Center, NativeBaseProvider } from 'native-base';
import ButtonSecondary from '../assets/Botones/ButtonSecondary';
import { Fonts } from '../constant/fonts';
const NotificacioneScreen = () => {
    const presionado = () =>{
        console.log("Se preciono el botond de las notificaciones")
    }
    const [service, setService] = React.useState("");

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
          Notificaciones
        </Heading>
        <Divider my="2" bg="#9A9A9A" />

          {/* Se tendria que hacer el mapeo para que saque el cuentasComponent de cada cuenta */}
          <Box display="flex" flex={1} flexDirection="column" space={4} padding={2}>
           <Text fontFamily={Fonts.Itim} fontSize={16}>
            Configura el tiempo de las notifiaciones que recibiras para tus tareas.
           </Text>
           <Select
            selectedValue={service}
            alignItems={"center"}
            fontFamily={Fonts.Itim}
            fontSize={16}
            accessibilityLabel="Seleccione una Clase"
            placeholder="Seleccione una Clase"
            _selectedItem={{
              bg: "#F5E3F9",
              
              endIcon: <CheckIcon size="5" />
            }}
            mt={3}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            {/* Aca se tiene que modificar el Valor y incluso pues un fetch para que jale las clases del alumno por id */}
            <Select.Item label="3 Horas" value="ux" />
            <Select.Item label="6 Horas" value="web" />
            <Select.Item label="12 Horas" value="cross" />
            <Select.Item label="24 Horas" value="ui" />
          </Select>
          </Box>

        
        <Box alignItems="center" mt={4}>
          <ButtonSecondary text={"Seleccionar"} onPress={presionado} />
        </Box>
      </Box>
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <NotificacioneScreen/>
    </NativeBaseProvider>
  );
};
