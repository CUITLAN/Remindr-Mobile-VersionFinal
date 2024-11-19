import * as React from "react";
import { View, ActivityIndicator } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";
import DrawerNavigation from "./Components/NavigationComponents/DrawerNavigation"; 
import Login from "./screens/Login";
import LoginSignUp from "./screens/Login-SignUp";
import Register from "./screens/Register";
import RegisterNumero from "./screens/RegisterNumero.js";
import RegisterNumeroValidacion from "./screens/RegisterNumeroValidacion.js";


export default function App() {
  const [fontsLoaded] = useFonts({
    Itim: require('./assets/Itim/Itim-Regular.ttf'), 
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

 
  const theme = extendTheme({
    text: {
      fontFamily: 'Itim',  
    },
  });

  return (
  //  <NativeBaseProvider theme={theme}>
  //    <DrawerNavigation />
  // </NativeBaseProvider>
    <LoginSignUp/>
  //  <Login/>
  );
}
