import React from "react";
import { account } from "./appwrite/appwriteConfig";
const Login = () => {
  function handleSignIn(e) {
    e.preventDefault();
    const res = account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard",
      "http://localhost:3000/"
    );
    console.log("Login -> res", res);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4 text-center">Login</h1>
        <button
          onClick={(e) => handleSignIn(e)} // Replace with your authentication function
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
