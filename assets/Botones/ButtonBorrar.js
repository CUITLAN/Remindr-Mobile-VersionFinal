import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";
import React from "react";
import { Fonts } from "../../constant/fonts.js";
import BasuraIcon from "../icons/BasuraIcon.js";
const ButtonRojo = ({ size = "md", onPress }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  const precionado = () =>{
    console.log("Se preciono el boyon de eliminar")
  }
  return (
    <Center>
      <Button
        justifyContent="center"
        alignItems="center"
        size={size}
        width="59px"
        height="38px"
        bg="#F00"
        _pressed={{ bg: "#FA6D6D" }}
        onPress={() => setIsOpen(!isOpen)}
      >
        <BasuraIcon />
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content fontFamily={Fonts.Itim}>
          <AlertDialog.CloseButton />
          <AlertDialog.Header _text={{fontFamily: "Itim", fontSize: 16}}textAlign={"center"} fontFamily={Fonts.Itim}>
            ¿Quieres eliminar la Cuenta?
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                _text={{
                  fontWeight: "400",
                  fontFamily: "Itim",
                  fontSize: 16,
                }}
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancelar
              </Button>
              <Button
                _text={{
                  fontWeight: "400",
                  fontFamily: "Itim",
                  fontSize: 16,
                }}
                borderBottomRadius={4}
                fontSize={16}
                background={"#9747FF"}
                onPress={precionado}
              >
                {/* Este boton deberia de llamar a la action de Delete */}
                Confirmar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ButtonRojo />
      </Center>
    </NativeBaseProvider>
  );
};
