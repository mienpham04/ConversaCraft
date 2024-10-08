import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { FcGoogle } from "react-icons/fc";
import GoogleAuth from "../AuthForm/GoogleAuth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-green-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-green-300"> ConversaCraft </span>
        </h1>

        <div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-green-300 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <GoogleAuth version={"Log In"}/>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading} onClick={handleSubmit}>
              {loading ? <span className="loading loading-spinner"></span> : "Login" }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

