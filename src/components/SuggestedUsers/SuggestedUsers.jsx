import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) return null;

  return (
    <VStack py={8} px={4} gap={4}>
      <SuggestedHeader />
      {suggestedUsers.length !== 0 && (
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
      )}
      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}
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
