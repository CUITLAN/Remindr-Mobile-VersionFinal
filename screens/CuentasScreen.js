import * as React from "react";
import { useSelector } from "react-redux";
import { Box, Divider, Heading, Center, NativeBaseProvider, ScrollView, Button, View, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import CuentasComponents from "../Components/ScreenComponents/CuentasComponents";
import ButtonSecondary from "../assets/Botones/ButtonSecondary";

const CuentasScreen = () => {
  const googleAccounts = useSelector((state) => state.googleAccounts.googleAccount);
  const presionado = () =>{
    console.log("Se preciono el agregar cuenta")
  }
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
          Cuentas
        </Heading>
        <Divider my="2" bg="#9A9A9A" />

        <ScrollView flex={1}> 
          {googleAccounts?.map((account) =>
              <View style={styles.taskCard} key={account._id}>
                <View>
                  <Text style={styles.taskTitle}>{account.nombreGoogle}</Text>
                  <Text style={styles.taskDescription}>
                    Email: {account.googleMail}
                  </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
          )}
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

const styles = {
  taskCard: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#d183fc",
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
};

