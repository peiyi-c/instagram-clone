import { Avatar, Flex, Text } from "@chakra-ui/react";

function Comment({ createdAt, username, img, text }) {
  return (
    <Flex gap={4}>
      <Avatar src={img} name={username} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Comment;
