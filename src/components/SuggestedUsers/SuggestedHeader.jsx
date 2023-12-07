import { Avatar, Text, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Avatar name="penny c." size={"md"} src="/profilepic.png" />
      <Text fontSize={12} fontWeight={"bold"}>
        philedelp.sd_
      </Text>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
}

export default SuggestedHeader;