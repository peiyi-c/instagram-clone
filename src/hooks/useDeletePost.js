import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import usePostStore from "../store/postStore";
import useShowToast from "../hooks/useShowToast";
import useUserProfileStore from "../store/userProfileStore";

const useDeletePost = () => {
  const authUser = useAuthStore((state) => state.user);
  const { deletePost } = usePostStore();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePostFromProfile = useUserProfileStore(
    (state) => state.deletePost
  );
  const showToast = useShowToast();

  const handleDeletePost = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    if (isDeleting) return;
    try {
      setIsDeleting(true);
      const imageRef = ref(storage, `posts/${postId}`);
      const userRef = doc(firestore, "users", authUser.uid);

      await deleteObject(imageRef);
      await deleteDoc(doc(firestore, "posts", postId));
      await updateDoc(userRef, {
        posts: arrayRemove(postId),
      });

      deletePost(postId);
      deletePostFromProfile(postId);
      showToast("Success", "Post deleted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return { isDeleting, handleDeletePost };
};

export default useDeletePost;
