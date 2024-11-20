import * as React from "react";
import {
  Box,
  Divider,
  Heading,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import ClasesCard from '../Components/ScreenComponents/ClasesComponents';
import ModalClases from "../Components/ScreenComponents/ModalClases";
const ClasesScreen = () => {
  // Obtén los datos de googleAccounts directamente desde Redux
  const googleAccounts = useSelector((state) => state.googleAccounts.googleAccount);

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
        <Box padding={2} > 
        {googleAccounts?.map((account) =>
              account.courses?.map((course) =>
                <View style={styles.taskCard} key={course._id}>
                  <View>
                    <Text style={styles.taskTitle}>{course.nameCourse}</Text>
                    <Text style={styles.taskDescription}>
                      Link: {course.courseLink}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Configuración</Text>
                  </TouchableOpacity>
                </View>
              )
            )}
            <ModalClases Clase="Ingenieria de Software"/>
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
