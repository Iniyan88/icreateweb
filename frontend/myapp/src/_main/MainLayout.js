import { Outlet, useNavigate } from "react-router-dom";
import TopBar from "./componenets/TopBar";
import LeftBar from "./componenets/LeftBar";
import BottomBar from "./componenets/BottomBar";
import { account, appwriteConfig, database } from "../appwrite/appwriteConfig";
import { useEffect, useState } from "react";
import { Query } from "appwrite";

const MainLayout = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fData = async () => {
      try {
        const api = await account.get();
        const user = await database.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.userCollectionId,
          [Query.equal("email", api.email)]
        );
        setData(user.documents[0]);
      } catch (e) {
        navigate("/");
      }
    };

    fData();
  }, [navigate]);
  return (
    <div className="w-full h-full  md:flex">
      <TopBar data={data} />
      <LeftBar data={data} />
      <section
        className="flex flex-1"
        // style={{
        //   backgroundImage: "url('bg.jpg')",
        //   backgroundSize: "cover",
        // }}
      >
        <Outlet />
      </section>
      <BottomBar />
    </div>
  );
};

export default MainLayout;
