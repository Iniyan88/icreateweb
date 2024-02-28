import React from "react";
import { Link } from "react-router-dom";

const Materials = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Study Materials:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/web" className="text-blue-500 ">
          <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
            Web Development
          </div>
        </Link>
        <Link to="/programming" className="text-blue-500 ">
          <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl  transition duration-300 text-center justify-center">
            <p class="text-slate-900 text-lg animate-pulse ">Programming</p>
          </div>
        </Link>
        <Link to="/aiml" className="text-blue-500 ">
          <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
            AI and ML
          </div>
        </Link>
        <Link to="/ethical" className="text-blue-500 ">
          <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
            Ethical Hacking
          </div>
        </Link>
        <Link to="/notes" className="text-blue-500 ">
          <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
            Notes
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Materials;
