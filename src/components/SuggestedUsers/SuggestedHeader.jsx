import { Avatar, Text, Flex, Button } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

function SuggestedHeader() {
  const { logout, loading } = useLogout();
  const authUser = useAuthStore((state) => state.user);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={"md"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>

      <Button
        onClick={logout}
        isLoading={loading}
        size={"xs"}
        background={"transparent"}
        _hover={{
          background: "transparent",
        }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
}

export default SuggestedHeader;
