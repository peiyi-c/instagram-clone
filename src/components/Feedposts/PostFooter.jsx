import {
  Flex,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/logos";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../Comment/CommentModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const [comment, setComment] = useState("");
  const { isCommenting, handlePostComment } = usePostComment();
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { isLiked, likes, handleLikePost } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };
  return (
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} width={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikePost} fontSize={18} cursor={"pointer"}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box onClick={() => commentRef.current.focus()} cursor={"pointer"}>
          <CommentLogo fontSize={18} cursor={"pointer"} />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600}>
        {likes} likes
      </Text>
      {isProfilePage && (
        <Text fontSize={"xs"} color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
            {creatorProfile?.username}{" "}
            <Text as={"span"} fontWeight={400}>
              {post.caption}
            </Text>
          </Text>

          {post.comments.length > 1 && (
            <Text
              onClick={onOpen}
              fontSize="12"
              color={"gray"}
              cursor={"pointer"}
            >
              View all {post.comments.length} comments
            </Text>
          )}
          {/* Comments model only on homepage */}
          {isOpen ? (
            <CommentsModal onClose={onClose} isOpen={isOpen} post={post} />
          ) : null}
        </>
      )}
      {authUser && (
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
            />
            <InputRightElement>
              <Button
                onClick={handleSubmitComment}
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
