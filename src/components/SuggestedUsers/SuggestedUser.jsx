import { Avatar, Text, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";

const SuggestedUser = ({ user, setUser }) => {
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);
  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"}>
      {/* left */}
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={user.profilePicURL} name={user.fullname} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Text fontSize={12} fontWeight={"bold"}>
            {user.fullname}
          </Text>
          <Text fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Text>
        </VStack>
      </Flex>
      {/* right */}
      {authUser.uid !== user.uid && (
        <Button
          onClick={onFollowUser}
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
