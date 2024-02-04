import React from "react";
import {
  account,
  appwriteConfig,
  avatars,
  database,
} from "./appwrite/appwriteConfig";
import Api from "./apis/Api";
import { ID, Permission, Query, Role } from "appwrite";
const Login = () => {
  async function handleSignIn(e) {
    e.preventDefault();
    const res = await account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard",
      "http://localhost:3000/"
    );

    const user = await Api();
    const avatarUrl = avatars.getInitials(user.name);
    console.log(avatarUrl);
    const userDetails = {
      accountId: user.$id,
      name: user.name,
      email: user.email,
      imgurl: avatarUrl,
    };
    const result = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("email", userDetails.email)]
    );
    if (result.documents.length === 0) {
      const newUser = database.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        userDetails,
        [Permission.read(Role.any())]
      );
      return newUser;
    }
    console.log(result.documents[0]);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4 text-center">Login</h1>
        <button
          onClick={(e) => handleSignIn(e)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
