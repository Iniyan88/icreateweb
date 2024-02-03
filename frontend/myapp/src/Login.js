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
    <>
      <h1>Login</h1>
      <button onClick={(e) => handleSignIn(e)}>Login with google</button>
    </>
  );
};

export default Login;
