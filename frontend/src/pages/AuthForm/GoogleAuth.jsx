import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firestore } from "../../firebase/firebase";
import useAuthStore from "../../hooks/useAuthStore";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = ({ version }) => {
  const loginUser = useAuthStore((state) => state.login);

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const { user } = result;

      const userDoc = {
        id: user.uid,
        userName: user.email.split("@")[0],
        fullName: user.displayName,
        gender: "Male",
      };

      await setDoc(doc(firestore, "users", user.uid), userDoc);
      localStorage.setItem("user-info", JSON.stringify(userDoc));
      loginUser(userDoc);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <button
        className="btn btn-block btn-sm mt-2"
        onClick={handleGoogle}
      >
        <div className="flex items-center">
          <FcGoogle className="w-8 h-8" />
          <span className="ml-2">{`${version} with Google`}</span>
        </div>
      </button>
    </div>
  );
};

export default GoogleAuth;