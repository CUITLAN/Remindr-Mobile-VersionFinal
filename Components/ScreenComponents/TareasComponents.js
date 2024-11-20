import * as React from "react";
import { Box, Text, Button } from "native-base";
import ButtonRojo from "../../assets/Botones/ButtonBorrar";
import ButtonTareas from "../../assets/Botones/ButtonTareas";

const TareasCommponents = () => {
  const precionado = () => {
    console.log("Se presionó el botón de eliminar la cuenta");
  };

  return (
    <Box
      display="flex"
      h={"30%"}
      flexDirection="row"
      justifyContent="space-between" // Esto asegura que el contenido esté separado
      alignItems="center" // Asegura que todo esté alineado verticalmente en el centro
      padding="10px"
      borderWidth="1px"
      borderColor="#D900FF"
      borderRadius="10px"
      marginBottom="10px"
      w="100%" // Asegura que el Box ocupe todo el ancho disponible
    >
      {/* Box para los textos, se ajusta al espacio disponible */}
      <Box flex={1}>
        <Text fontSize="16px" fontWeight="bold">
          Crear Javascript
        </Text>
        <Text fontSize="14px">Curso Desarrollo Web</Text>
      </Box>

      {/* El botón siempre alineado a la derecha y centrado */}
      <Box ml="auto"> {/* Esto asegura que el botón esté a la derecha */}
        <ButtonTareas onPress={precionado} size="sm" /> {/* Ajusta el tamaño del botón */}
      </Box>
    </Box>
  );
};

export default TareasCommponents;
