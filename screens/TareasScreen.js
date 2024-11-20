import * as React from "react";
import TareasSinNotificacion from "../Components/ScreenComponents/TareasSinNotificacion";
import TareasCommponents from "../Components/ScreenComponents/TareasComponents";
import {
  Box,
  Link,
  Text,
  Divider,
  Heading,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Select,
  ScrollView,
} from "native-base";
import { Fonts } from "../constant/fonts";
import TareasMuteadas from "../Components/ScreenComponents/TareasMuteadas";

const TareasScreen = () => {
  const [service, setService] = React.useState("");

  return (
    <Center w="100%" flex={1} bg="#f5e6ff">
      <Box
        safeArea
        p="4"
        pb={204}
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
      >
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          textAlign="center"
        >
          Tareas
        </Heading>
        <Divider my="2" bg="#9A9A9A" />

        <Box maxW="358">
          <Select
            selectedValue={service}
            alignItems={"center"}
            fontFamily={Fonts.Itim}
            fontSize={16}
            accessibilityLabel="Seleccione una Clase"
            placeholder="Seleccione una Clase"
            _selectedItem={{
              bg: "#F5E3F9",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={3}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Todos" value="ux" />
            <Select.Item label="Ciencia de Datos" value="web" />
            <Select.Item label="Topico 1" value="cross" />
            <Select.Item label="Analisis y Diseño de Software" value="ui" />
            <Select.Item label="Apps Mobiles" value="backend" />
          </Select>
        </Box>

        <TareasSinNotificacion />

        {/* Usamos flex y flexGrow para un comportamiento dinámico */}
        <ScrollView style={{ flex: 1 }}>
          <Box display="flex" flexDirection="column" space={4} padding={2} flexGrow={1}>
            {/* <TareasCommponents />
            <TareasMuteadas/>
            */}
            
          </Box>
        </ScrollView>
      </Box>
    </Center>
  );
};

// Exportamos el componente LoginorSign
export default () => (
  <NativeBaseProvider>
    <TareasScreen />
  </NativeBaseProvider>
);
