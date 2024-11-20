import React from 'react'
import { Box, Link, Text } from 'native-base'
const TareasSinNotificacion = () => {
  return (
    <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mt="19"
        >
          <Text fontSize="16" fontWeight="400" fontFamily="Itim">
            Hay tareas que no tienen notificaciones activas. Puedes ver estas tareas {" "}
            <Link
              _text={{
                color: "#007EFF",
                fontSize: "16",
                fontWeight: "400",
                fontFamily: "Itim",
              }}
              onPress={() => {
                console.log("Se preciono el boton de tareas")
                // Lógica de redirección al hacer clic
                // Ejemplo: navigation.navigate("Login");
              }}
            >
              aqui
            </Link>
          </Text>
        </Box>
  )
}

export default TareasSinNotificacion
