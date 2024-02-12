// Card.js

import React from "react";

const Card = ({ title }) => {
  return (
    <div className="flex h-12 ">
      <div className="bg-white border rounded shadow p-2 ">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
