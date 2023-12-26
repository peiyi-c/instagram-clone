import { useState } from "react";
import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const { login, loading, error } = useLogin();
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
        placeholder="Password"
        fontSize={14}
        type="password"
        name="password"
        size={"sm"}
        onChange={handleChange}
      />
      {error.message && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        isLoading={loading}
        onClick={() => login(inputs)}
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        Log In
      </Button>
    </>
  );
};

export default Login;
