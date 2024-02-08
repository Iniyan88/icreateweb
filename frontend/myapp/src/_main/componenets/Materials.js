import React from "react";
import { Link } from "react-router-dom";

const Materials = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Study Materials</h1>
      <div className="flex flex-col space-y-4">
        <Link to="/web" className="text-blue-500 hover:underline">
          web Development
        </Link>
        <Link to="/programming" className="text-blue-500 hover:underline">
          programming
        </Link>
        <Link to="/aiml" className="text-blue-500 hover:underline">
          ai and ml
        </Link>
        <Link to="/ethical" className="text-blue-500 hover:underline">
          ethical hacking
        </Link>
        <Link to="/notes" className="text-blue-500 hover:underline">
          notes
        </Link>
      </div>
    </div>
  );
};
export default Materials;
