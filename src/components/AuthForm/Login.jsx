import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
function Login() {
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
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log In
      </Button>
    </>
  );
}

export default Login;
