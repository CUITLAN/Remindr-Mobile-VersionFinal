import React, { useState } from "react";
import {
  Modal,
  Text,
  Center,
  NativeBaseProvider,
  Pressable,
  Box,
  Image,
  View,
  Link,
} from "native-base";

import ClasesCard from "../ScreenComponents/ClasesComponents";
const ModalClases = () => {
  const [open, setOpen] = useState(false);

  return (
    <Center>
  {/* Pressable para hacer la tarjeta interactiva */}
  <Pressable onPress={() => setOpen(true)}>
    <ClasesCard
      Cuenta="Alan78707@gmail.com"
      Clase="Analisis y Diseño de Software 18"
    />
  </Pressable>

  {/* Modal que se muestra al presionar la tarjeta */}
  <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
    <Modal.Content maxWidth="350">
      <Modal.CloseButton />
      {/* Encabezado del modal */}
      <Modal.Header
        _text={{ fontFamily: "Itim", fontSize: "xl", textAlign: "center" }}
      >
        Analisis y diseño de software
      </Modal.Header>
      <Modal.Body>
        <Box mb={8}>
          <Text fontSize={"16"} fontFamily={"Itim"}>
            Tareas por enviar : 15
          </Text>
          <Text fontSize={"16"} fontFamily={"Itim"}>
            Clase: Análisis y diseño de software
          </Text>
        </Box>

        {/* Enlace dentro de un Box */}
        <Box
          alignItems="center"
          background={"#E3F5DD"}
          borderRadius={10}
          display="inline-flex"
          h={45}
          
          justifyContent={"center"}
        >
            {/* Aca igual te tendria que llevar a la clase del Classroom */}
          <Link
            href="https://docs.nativebase.io"
            isExternal
            style={{ flex: 1, width: "100%", height: "100%" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                
        
              }}
            >
              <Image
                source={require("../../assets/logo/ClassroomLogo.png")}
                alt="ClassroomLogo"
                ml={"14"}
                
                style={{ width: 34, height: 29, marginRight: 20 }}
              />
              <Text
              ml={12}
                style={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "#1F2937",
                  fontFamily: "Itim",
                  
                }}
              >
                Ir a la clase
              </Text>
            </View>
          </Link>
        </Box>
      </Modal.Body>
    </Modal.Content>
  </Modal>
</Center>

  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ModalClases />
      </Center>
    </NativeBaseProvider>
  );
};
