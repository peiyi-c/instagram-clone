import { Avatar, Text, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";

function SuggestedUser({ username, followers, avatar }) {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"}>
      {/* left */}
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={username} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Text fontSize={12} fontWeight={"bold"}>
            {username}
          </Text>
          <Text fontSize={11} color={"gray.500"}>
            {followers} followers
          </Text>
        </VStack>
      </Flex>
      {/* right */}
      <Button
        onClick={() => setIsFollowed(!isFollowed)}
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
}

export default SuggestedUser;
