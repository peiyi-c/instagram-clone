import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import useSignupWithEmailAndPassword from "../../hooks/useSignupWithEmailAndPassword";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const { loading, error, signup } = useSignupWithEmailAndPassword();
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        name="email"
        size={"sm"}
        onChange={handleChange}
      />
      <Input
        placeholder="Username"
        fontSize={14}
        type="text"
        name="username"
        size={"sm"}
        onChange={handleChange}
      />
      <Input
        placeholder="Fullname"
        fontSize={14}
        type="text"
        name="fullname"
        size={"sm"}
        onChange={handleChange}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          name="password"
          size={"sm"}
          onChange={handleChange}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        isLoading={loading}
        onClick={() => signup(inputs)}
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
