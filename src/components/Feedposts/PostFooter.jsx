import {
  Flex,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/logos";
function PostFooter({ username }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes((likes) => likes--);
    } else {
      setIsLiked(true);
      setLikes((likes) => likes++);
    }
  };
  return (
    <Box mb={10}>
      <Flex alignItems={"center"} gap={4} width={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} fontSize={18} cursor={"pointer"}>
          {isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box>
          <CommentLogo fontSize={18} cursor={"pointer"} />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600}>
        {likes} likes
      </Text>
      <Text fontSize={"sm"} fontWeight={700}>
        {username}{" "}
        <Text as="span" fontWeight={400}>
          Feeling good
        </Text>
      </Text>
      <Text fontSize={"sm"} color={"gray"}>
        View all 1,000 comments
      </Text>
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default PostFooter;
