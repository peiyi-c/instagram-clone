import { Container, Flex, Box } from "@chakra-ui/react";
import Feedposts from "../../components/Feedposts/Feedposts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        {/* left - Feed posts */}
        <Box flex={2} py={10}>
          <Feedposts />
        </Box>
        {/* right - Suggested users*/}
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          {/* <SuggestedUsers /> */}
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
