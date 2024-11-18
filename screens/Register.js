import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Pressable,
  Divider,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Icon,
  Text,
  Center,
  NativeBaseProvider,
  Checkbox,
} from "native-base";
import { Fonts } from "../constant/fonts";
import ButtonPrimary from "../assets/Botones/ButtonPrimary";
import UserIcon from "../assets/icons/UserIcon";
import Mail from "../assets/icons/Mail";

const Register = () => {
  const handleButtonClick = () => {
    console.log("Se preciono el boton de continuar");
  };
  const [groupValues, setGroupValues] = React.useState([]);
  const [show, setShow] = React.useState(false);

  return (
    <Center w="100%" flex={1} bg="#f5e6ff">
      <Box
        safeArea
        p="4"
        mb="116"
        ml="10"
        mr="10"
        height="723"
        w="90%"
        maxW="392"
        bg="white"
        borderRadius="10"
        shadow={2}
        mt="75px"
      >
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          textAlign="center"
        >
          Crea una cuenta
        </Heading>
        <Divider my="2" bg="#9A9A9A" />

        <VStack
          space={8}
          mt="5"
          padding="8px 29px 8px 27px"
          alignItems="center"
        >
          <FormControl>
            <Input
              padding="8wpx 2px 2px 45px"
              fontFamily={Fonts.Itim}
              placeholder="Nombres"
              fontSize={16}
              variant="outline"
              borderRadius="10"
              borderColor="#d183fc"
              _focus={{
                borderColor: "#d183fc",
              }}
              InputLeftElement={
                <Box ml="2">
                  <UserIcon ml="2" />
                </Box>
              }
            />
          </FormControl>
          <FormControl>
            <Input
              fontFamily={Fonts.Itim}
              placeholder="Apellidos"
              fontSize={16}
              variant="outline"
              borderRadius="10"
              borderColor="#d183fc"
              _focus={{
                borderColor: "#d183fc",
              }}
            />
          </FormControl>
          <FormControl>
            <Input
              fontFamily={Fonts.Itim}
              placeholder="Correos"
              fontSize={16}
              variant="outline"
              borderRadius="10"
              borderColor="#d183fc"
              _focus={{
                borderColor: "#d183fc",
              }}
              InputLeftElement={
                <Box ml="2">
                  <Mail />
                </Box>
              }
            />
          </FormControl>
          <FormControl>
            <Input
              fontFamily={Fonts.Itim}
              borderColor="#d183fc"
              borderRadius="10"
              variant="outline"
              fontSize={16}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Contraseña"
            />
          </FormControl>
          <FormControl>
            <Input
              fontFamily={Fonts.Itim}
              borderColor="#d183fc"
              borderRadius="10"
              variant="outline"
              fontSize={16}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Confirmar Contraseña"
            />
            <Box
              height={71}
              display="flex"
              alignItems={"flex-start"}
              padding=" 8px 29px 8px 27px"
            >
              <Checkbox.Group
                onChange={setGroupValues}
                value={groupValues}
                accessibilityLabel="choose numbers"
              >
                <Checkbox value="one" my={2} fontFamily={Fonts.Itim}>
                  <Text fontSize="16" fontWeight="400" fontFamily="Itim">
                    Acepto los
                  </Text>
                  <Link
                    _text={{
                      color: "#007EFF",
                      fontSize: "16",
                      fontWeight: "400",
                      fontFamily: "Itim",
                    }}
                    onPress={() => {
                      // Lógica de redirección al hacer clic
                      // Ejemplo: navigation.navigate("Login");
                    }}
                  >
                    {" "}
                    Terminos y Condiciones
                  </Link>
                </Checkbox>
                <Checkbox value="one" my={2} fontFamily={Fonts.Itim}>
                  <Text fontSize="16" fontWeight="400" fontFamily="Itim">
                    Acepto que remindr pueda enviarme mensajes por Whatsapp
                  </Text>
                  
                </Checkbox>
              </Checkbox.Group>
            </Box>
            <Box mt="68">
              {/* igual aca falta que cuando se precione el boton se compare los datos y se mande a iniciar sesion */}
              <ButtonPrimary text={"Continuar"} onPress={handleButtonClick} />
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                mt="19"
              >
                <Text fontSize="16" fontWeight="400" fontFamily="Itim">
                  ¿Ya tienes cuenta?{" "}
                </Text>
                <Link
                  _text={{
                    color: "#007EFF",
                    fontSize: "16",
                    fontWeight: "400",
                    fontFamily: "Itim",
                  }}
                  onPress={() => {
                    // Lógica de redirección al hacer clic
                    // Ejemplo: navigation.navigate("Login");
                  }}
                >
                  Iniciar sesión
                </Link>
              </Box>
            </Box>
          </FormControl>
        </VStack>
      </Box>
    </Center>
  );
};

// Exportamos el componente LoginorSign
export default () => (
  <NativeBaseProvider>
    <Register />
  </NativeBaseProvider>
);
