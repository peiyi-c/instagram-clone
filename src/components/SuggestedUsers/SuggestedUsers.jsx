import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={4} gap={4}>
      <SuggestedHeader />
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        {/* left */}
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        {/* right */}
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        username="abe.ryo"
        followers={10}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        username="ryan_insta"
        followers={520}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        username="christian.d1457"
        followers={1047}
        avatar="https://bit.ly/code.beast"
      />
      <Box alignSelf={"flex-start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2023 Built By{" "}
        <Link
          href="https://github.com/peiyi-c"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
          style={{ textDecoration: "none" }}
        >
          Penny C.
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
