import React from "react";
import "animate.css";
const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="top-0 w-full flex font-mono bg-indigo-700 text-slate-50 h-10 justify-center items-center text-2xl">
        Enough Fun Time2Grow !
      </div>
      <div className=" h-screen flex flex-col items-center justify-center bg-gray-200">
        <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Grow With Us
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center p-6 bg-blue-500 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white">
                Web Development
              </h2>
            </div>
            <div className="flex items-center justify-center p-6 bg-green-500 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white">AI</h2>
            </div>
            <div className="flex items-center justify-center p-6 bg-yellow-500 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white">
                Ethical Hacking
              </h2>
            </div>
            <div className="flex items-center justify-center p-6 bg-purple-500 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white">Programming</h2>
            </div>
          </div>
          <div className="flex mt-3 items-center justify-center p-6 bg-red-500 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Notes!!</h2>
          </div>
          <p className="text-center mt-8 text-gray-700">
            Access these courses in the Materials section
          </p>
        </div>
      </div>
      <div className="w-full bg-black text-slate-700 flex items-center justify-center h-28 top-9  ">
        <p className="font-mono font-bold text-sm  md:text-xl">
          Designed and Developed By Icreate
        </p>
      </div>
    </div>
  );
};
export default Dashboard;
