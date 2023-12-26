import { useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

<<<<<<< HEAD
const useEditProfile = () => {
=======
function useEditProfile() {
>>>>>>> 23f6736714ca4bd2a5d21ae3246f5faf5bf819d6
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

  const showToast = useShowToast();

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return;

    setIsUpdating(true);
    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }
      const updatedUser = {
<<<<<<< HEAD
        // ...authUser,
=======
        ...authUser,
>>>>>>> 23f6736714ca4bd2a5d21ae3246f5faf5bf819d6
        fullname: inputs.fullname || authUser.fullname,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL,
      };
      await updateDoc(userDocRef, updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
<<<<<<< HEAD
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
=======
      setIsUpdating(false);
    } catch (error) {
      showToast("Error", error.message, "error");
>>>>>>> 23f6736714ca4bd2a5d21ae3246f5faf5bf819d6
      setIsUpdating(false);
    }
  };

  return { editProfile, isUpdating };
<<<<<<< HEAD
};
=======
}
>>>>>>> 23f6736714ca4bd2a5d21ae3246f5faf5bf819d6

export default useEditProfile;
