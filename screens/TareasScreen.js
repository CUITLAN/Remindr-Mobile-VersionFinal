import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Divider,
  Heading,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Select,
  Text,
  View,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Fonts } from "../constant/fonts";
import { getGoogleAccountsAction } from "../actions/googleActions";

const TareasScreen = () => {
  const [service, setService] = React.useState("");
  const dispatch = useDispatch();

  // Obtén los datos de googleAccounts directamente desde Redux
  const googleAccounts = useSelector((state) => state.googleAccounts.googleAccount);

  // Usa useEffect para despachar la acción al montar el componente
  React.useEffect(() => {
    const id = "6734cad96515321565fbec41";
    dispatch(getGoogleAccountsAction(id));
  }, [dispatch]);

  // Muestra los datos obtenidos en la consola
  React.useEffect(() => {
    console.log("Datos de googleAccounts:", googleAccounts);
  }, [googleAccounts]);

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

          {/* Renderiza las tareas */}
          <Box mt={4}>
            {googleAccounts?.map((account) =>
              account.courses?.map((course) =>
                course.courseWorks?.map((work) =>
                  work.works?.map((workData) => (
                    <View style={styles.taskCard} key={workData._id}>
                      <View>
                        <Text style={styles.taskTitle}>{workData.title}</Text>
                        <Text style={styles.taskDescription}>
                          Tarea: {workData.description}
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Configuración</Text>
                      </TouchableOpacity>
                    </View>
                  ))
                )
              )
            )}
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default () => (
  <NativeBaseProvider>
    <TareasScreen />
  </NativeBaseProvider>
);

// Estilos
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
