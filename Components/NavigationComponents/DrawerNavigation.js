import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  NativeBaseProvider,
  Box,
  View,
  Pressable,
  VStack,
  Text,
  Image,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
//Estos de aca son los iconos
import CuentasIcon from "../../assets/icons/CuentasIcon";
import EditarPerfil from "../../assets/icons/EditarPerfil";
import TareasIcon from "../../assets/icons/TareasIcon";
import ClasesIcon from "../../assets/icons/ClasesIcon";
import NotificacionIcon from "../../assets/icons/NotificacionIcon";
import CerrarSesion from "../../assets/icons/CerrarSesion";
import { Fonts } from "../../constant/fonts";
import TareasScreen from "../../screens/TareasScreen";
import CuentasScreen from "../../screens/CuentasScreen";
import NotificacionesScreen from "../../screens/NotificacionesScreen";
import ClasesScreen from "../../screens/ClasesScreen";
import EditarCuentaScreen from "../../screens/EditarCuentaScreen";
import ButtonCerrarSesion from "../../assets/Botones/ButtonCerrarSesion";
global.__reanimatedWorkletInit = () => {};
const Drawer = createDrawerNavigator();
//Esto es para definir el que hay dentro de cada caso Basicamente de aqui dependiendo del caso Cargaria una screen diferente

// Estos son los iconos aca se le asigna a cada Nombre un icono
const getIcon = (screenName) => {
  switch (screenName) {
    case "Tareas":
      return <TareasIcon />;
    case "Editar Perfil":
      return <EditarPerfil />;
    case "Clases":
      return <ClasesIcon />;
    case "Cuentas":
      return <CuentasIcon />;
    case "Notificaciones":
      return <NotificacionIcon />;
    
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea style={{ flex: 1 }} >
  <VStack space="1" my="2" mx="1" flex={1} h={690}>
    {/* Contenedor para los botones de navegación */}
    <VStack divider={<Divider />} space="4" flex={1}>
      <VStack space="3">
        {props.state.routeNames
          .map((name, index) => (
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
              <HStack space={4} justifyContent="left" gap={7}>
                <Icon
                  color={index === props.state.index ? "black" : "#1F2937"}
                  size="5"
                  as={getIcon(name)}
                />
                <Text
                  fontWeight="400"
                  fontSize="16px"
                  color={index === props.state.index ? "black" : "#1F2937"}
                  fontFamily="Itim"
                  lineHeight="20px"
                >
                  {name}
                </Text>
              </HStack>
            </Pressable>
          ))}
      </VStack>
    </VStack>
    {/* Botón de Cerrar Sesión al final */}
    <ButtonCerrarSesion mt="auto" />
  </VStack>
</DrawerContentScrollView>



  );
}

function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
      
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        
        screenOptions={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/logo/Logo.png")}
                alt="Logo"
                style={{ width: 45, height: 39, marginRight: 10 }} 
              />
              <Text
                style={{
                  fontFamily: Fonts.Itim,
                  fontSize: 24,
                  fontWeight: "400",
                  color: "#1F2937",
                }}
              >
                Remindr
              </Text>
            </View>
          ),
          headerTitleAlign: "center", 
        }}
      >
        <Drawer.Screen name="Tareas" component={TareasScreen} />
        <Drawer.Screen name="Editar Perfil" component={EditarCuentaScreen} />
        <Drawer.Screen name="Clases" component={ClasesScreen} />
        <Drawer.Screen name="Cuentas" component={CuentasScreen} />
        <Drawer.Screen name="Notificaciones" component={NotificacionesScreen} />
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
