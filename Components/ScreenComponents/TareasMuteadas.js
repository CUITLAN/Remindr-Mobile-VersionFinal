import * as React from "react";
import { Box, Text, Button } from "native-base";
import { ButtonSecondaryPequeño } from "../../assets/Botones/ButtonSecondary";

const TareasMuteadas = () => {
  const precionado = () => {
    console.log("Se presionó el botón de incluir");
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

      {/* Box para el botón con alineación y tamaño controlado */}
      <Box ml="auto" > {/* width="auto" se asegura de que el botón no se salga del Box */}
        <ButtonSecondaryPequeño text={"Incluir"} onPress={precionado} />
      </Box>
    </Box>
  );
};

export default TareasMuteadas;
