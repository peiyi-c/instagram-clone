import { Flex, Image, Text, Alert, AlertIcon } from "@chakra-ui/react";
import useLoginWithGoogle from "../../hooks/useLoginWithGoogle";

const GoogleAuth = ({ prefix }) => {
  const { loginGoogle, error } = useLoginWithGoogle();
  return (
    <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
      <Image src="./google.png" w={5} alt="Google Logo" />
      <Text mx="2" color={"blue.500"} onClick={loginGoogle}>
        {prefix} with Google
      </Text>
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
    </Flex>
  );
};

export default GoogleAuth;
