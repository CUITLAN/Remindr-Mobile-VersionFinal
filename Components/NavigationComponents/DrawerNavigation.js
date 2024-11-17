import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  NativeBaseProvider,
  Box,
  Pressable,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
//Estos de aca son los iconos
import CuentasIcon from "../../assets/icons/CuentasIcon"
import EditarPerfil from "../../assets/icons/EditarPerfil";
import  TareasIcon  from "../../assets/icons/TareasIcon";
import ClasesIcon from "../../assets/icons/ClasesIcon";
import NotificacionIcon from "../../assets/icons/NotificacionIcon";
import CerrarSesion from "../../assets/icons/CerrarSesion";
global.__reanimatedWorkletInit = () => {};
const Drawer = createDrawerNavigator();
//Esto es para definir el que hay dentro de cada caso Basicamente de aqui dependiendo del caso Cargaria una screen diferente
function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

// Estos son los iconos aca se le asigna a cada Nombre un icono
const getIcon = (screenName) => {
  switch (screenName) {
    case "Tareas": 
      return <TareasIcon />;
    case "Editar Perfil":
      return <EditarPerfil/>;
    case "Clases":
      return <ClasesIcon/>;
    case "Cuentas":
      return <CuentasIcon/>;
    case "Notificaciones":
      return <NotificacionIcon/>;
    case "Cerrar Sesion":
      return <CerrarSesion/>;
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                key={name}
                px="5"
                py="3"
                rounded="md"
                bg={index === props.state.index ? "#E2E0F9" : "transparent"}
                onPress={() => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={index === props.state.index ? "black" : "#1F2937"}
                    size="5"
                    as={getIcon(name)} // Usa el componente retornado por getIcon
                  />
                  <Text
                    fontWeight="500"
                    color={index === props.state.index ? "black" : "#1F2937"}
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Tareas" component={Component} />
        <Drawer.Screen name="Editar Perfil" component={Component} />
        <Drawer.Screen name="Clases" component={Component} />
        <Drawer.Screen name="Cuentas" component={Component} />
        <Drawer.Screen name="Notificaciones" component={Component} />
        <Drawer.Screen name="Cerrar Sesion" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}

export default function Example() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
