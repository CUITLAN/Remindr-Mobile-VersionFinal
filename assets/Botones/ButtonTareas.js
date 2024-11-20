import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";
import React from "react";
import InformacionIcon from "../icons/InformacionIcon.js";
import BasuraIcon from "../icons/BasuraIcon.js";
const ButtonTareas = ({ size = "md", onPress }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  const precionado = () =>{
    console.log("Se preciono el boyon de More info puto")
  }
  return (
    <Center>
      <Button
        justifyContent="center"
        alignItems="center"
        size={size}
        width="59px"
        height="38px"
        bg="#EA74FF"
        _pressed={{ bg: "#FA6D6D" }}
        onPress={precionado}
      >
        <InformacionIcon />
      </Button>
      
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ButtonTareas />
      </Center>
    </NativeBaseProvider>
  );
};
