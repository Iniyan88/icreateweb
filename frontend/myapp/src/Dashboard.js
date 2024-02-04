import React from "react";
import { useEffect, useState } from "react";
import Api from "./apis/Api";
import { appwriteConfig, database } from "./appwrite/appwriteConfig";
import { Query } from "appwrite";
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fData = async () => {
      const api = await Api();
      const user = await database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("email", api.email)]
      );
      setData(user);
    };
    fData();
  }, []);
  return (
    <div className="flex justify-center">
      <img src={data.documents[0].imgurl} height={50} width={50}></img>
    </div>
  );
};

export default Dashboard;
