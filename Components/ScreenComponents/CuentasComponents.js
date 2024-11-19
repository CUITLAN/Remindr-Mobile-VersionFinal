import * as React from "react";
import { Box, Text, Button } from "native-base";
import ButtonRojo from "../../assets/Botones/ButtonBorrar"
const CuentasComponents = () => {
  const precionado= ()=>{
    console.log("Se preciono elboyon de eliminar la cuenta")
  }
  return (
    
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="10px"
      borderWidth="1px"
      borderColor="#D900FF"
      borderRadius="10px"
      marginBottom="10px"
    >
      {/* Esta parte de aca se tiene que modificar para hacer lo del mapeo */}
      <Box>
        <Text fontSize="16px" fontWeight="bold">
          Alan Orlando Trejo Tinajero
        </Text>
        <Text fontSize="14px">Cuenta: alan78707@gmail.com</Text>
      </Box>
      {/* Este boton es el que tendria que abrir para agregar otra cuenta de google */}
      <ButtonRojo onPress={precionado}/>
    </Box>
  );
};

export default CuentasComponents;
