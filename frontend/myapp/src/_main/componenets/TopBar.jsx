import React, { useState } from "react";
import { account } from "../../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";

const TopBar = (data) => {
  const navigate = useNavigate();
  const [isLogging, setisLogging] = useState(false);
  async function Logout() {
    setisLogging(true);
    await account.deleteSession("current");
    navigate("/");
  }
  return (
    <div className="sticky top-0 z-50 md:hidden bg-black w-full">
      <div className="flex-between py-4 px-5">
        <div className="flex gap-4 text-slate-100">
          <button onClick={() => Logout()}>
            {isLogging ? (
              "Logging out..."
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
              </svg>
            )}
          </button>
          <img
            src={data.data.imgurl || "/assets/react.png"}
            className="h-8 w-8 rounded-full"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
