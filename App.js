import * as React from "react";
import { useState, useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Provider } from "react-redux";

import initializeStore from "./Store.js";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";
import DrawerNavigation from "./Components/NavigationComponents/DrawerNavigation"; 

export default function App() {
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const setupStore = async () => {
      try {
        const initializedStore = await initializeStore();
        setStore(initializedStore);
      } catch (err) {
        console.error("Error initializing store:", err);
        setError("No se pudo inicializar la aplicación.");
      }
    };

    setupStore();
  }, []);

  const [fontsLoaded] = useFonts({
    Itim: require('./assets/Itim/Itim-Regular.ttf'),
  });

  const theme = extendTheme({
    text: {
      fontFamily: 'Itim',
    },
  });

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!store || !fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <DrawerNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}
