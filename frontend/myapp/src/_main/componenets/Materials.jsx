import React from "react";
import { Link } from "react-router-dom";

const Materials = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Study Materials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
          <Link to="/web" className="text-blue-500 hover:underline">
            Web Development
          </Link>
        </div>
        <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
          <Link to="/programming" className="text-blue-500 hover:underline">
            <p>Programming</p>
          </Link>
        </div>
        <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
          <Link to="/aiml" className="text-blue-500 hover:underline">
            AI and ML
          </Link>
        </div>
        <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
          <Link to="/ethical" className="text-blue-500 hover:underline">
            Ethical Hacking
          </Link>
        </div>
        <div className="bg-white p-4 h-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center justify-center">
          <Link to="/notes" className="text-blue-500 hover:underline">
            Notes
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Materials;
