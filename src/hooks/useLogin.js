import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

function useLogin() {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginUser = useAuthStore((state) => state.login);
  const showToast = useShowToast();

  const login = async ({ email, password }) => {
    if (!email || !password) {
      return showToast("Error", "Please fill all the fields", "error");
    }
    try {
      const userCred = await signInWithEmailAndPassword(email, password);
      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", error.message, "error");
      console.error(error);
    }
  };

  return { login, loading, error };
}

export default useLogin;
