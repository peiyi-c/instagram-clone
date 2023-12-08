import { Flex, Image, Text } from "@chakra-ui/react";
function GoogleAuth() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
      <Image src="./google.png" w={5} alt="Google Logo" />
      <Text mx="2" color={"blue.500"}>
        Log in with Google
      </Text>
    </Flex>
  );
}

export default GoogleAuth;
