import {
  Box,
  Image,
  VStack,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/");
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="./logo.png" h={24} alt="Instagram" />
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            name="email"
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            fontSize={14}
            type="password"
            name="password"
            onChange={handleChange}
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              name="confirmPassword"
              onChange={handleChange}
            />
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
          {/* ----------------- OR ----------------- */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
            my={4}
            gap={1}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          {/*  Log in with Google */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image src="./google.png" w={5} alt="Google Logo" />
            <Text mx="2" color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      {/* ----------------- Switch between Login and Signup ----------------- */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
