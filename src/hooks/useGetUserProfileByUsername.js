import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, query, getDocs, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import userProfileStore from "../store/userProfileStore";

function useGetUserProfileByUsername(username) {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = userProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) return setUserProfile(null);

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [setUserProfile, username, showToast]);
  return { isLoading, userProfile };
}

export default useGetUserProfileByUsername;
