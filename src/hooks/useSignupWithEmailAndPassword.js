import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

function useSignupWithEmailAndPassword() {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const signup = async ({ fullname, username, email, password }) => {
    if (!fullname || !username || !email || !password) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email,
          username,
          fullname,
          bio: "",
          profilePicURL: "",
          followers: [],
          followings: [],
          posts: [],
          createAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        navigate("/");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
}

export default useSignupWithEmailAndPassword;
