// Card.js

import React from "react";

const Card = ({ title }) => {
  return (
    <div className=" p-4">
      <div className="bg-white border rounded shadow p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p>Card content goes here...</p>
      </div>
    </div>
  );
};

export default Card;
