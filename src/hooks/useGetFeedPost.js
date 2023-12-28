import { useEffect, useState } from "react";
import usePostStore from "../store/postStore";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetFeedPost = () => {
  const [isLoading, setIsloading] = useState(true);
  const { posts, setPosts } = usePostStore();
  const authUser = useAuthStore((state) => state.user);
  const { setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setIsloading(true);
      if (authUser.followings.length === 0) {
        setIsloading(false);
        setPosts([]);
        return;
      }
      const q = query(
        collection(firestore, "posts"),
        where("createdBy", "in", authUser.followings)
      );

      try {
        const querySnapshot = await getDocs(q);
        const feedPost = [];
        querySnapshot.forEach((doc) => {
          feedPost.push({ id: doc.id, ...doc.data() });
        });
        feedPost.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(feedPost);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsloading(false);
      }
    };
    if (authUser) getFeedPosts();
  }, [authUser, showToast, setPosts, setUserProfile]);
  return { isLoading, posts };
};

export default useGetFeedPost;
