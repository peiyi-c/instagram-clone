import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import { useToast } from "@chakra-ui/react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

function useFollowUser(userId) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = useUserProfileStore();

  const showToast = useToast();

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.followings.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);

  const handleFollowUser = async () => {
    setIsUpdating(true);

    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnFollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        followings: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });

      await updateDoc(userToFollowOrUnFollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });

      if (isFollowing) {
        //unfollow
        setAuthUser({
          ...authUser,
          followings: authUser.followings.filter((uid) => uid !== userId),
        });
        setUserProfile({
          ...userProfile,
          followers: userProfile.followers.filter(
            (uid) => uid !== authUser.uid
          ),
        });
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            followings: authUser.followings.filter((uid) => uid !== userId),
          })
        );
        setIsFollowing(false);
      } else {
        // follow
        setAuthUser({
          ...authUser,
          followings: [...authUser.followings, userId],
        });
        setUserProfile({
          ...userProfile,
          followers: [...userProfile.followers, authUser.uid],
        });
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            followings: [...authUser.followings, userId],
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { isUpdating, isFollowing, handleFollowUser };
}
export default useFollowUser;
