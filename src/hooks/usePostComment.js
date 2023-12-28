import { useState } from "react";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../store/postStore";

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const { addComment } = usePostStore();
  const showToast = useShowToast();

  const handlePostComment = async (postId, comment) => {
    if (isCommenting) return;
    if (!authUser)
      return showToast("Error", "You must login to comment!", "error");

    setIsCommenting(true);
    const newComment = {
      comment,
      createdAt: Date.now(),
      createdBy: authUser.uid,
      postId,
    };

    try {
      await updateDoc(doc(firestore, "posts", postId), {
        comments: arrayUnion(newComment),
      });

      addComment(postId, newComment);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsCommenting(false);
    }
  };

  return { isCommenting, handlePostComment };
};

export default usePostComment;
