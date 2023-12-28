import { Flex, Link, Avatar, Text } from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import { timeAgo } from "../../utils/timeAgo";

const Caption = ({ post }) => {
  const { userProfile } = useUserProfileStore();

  return (
    <Flex gap={4}>
      <Link to={`/${userProfile.username}`}>
        <Avatar
          src={userProfile.profilePicURL}
          name={userProfile.username}
          size={"sm"}
        />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(post.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Caption;
