// Programming.js

import React, { useState } from "react";
import Card from "../componenets/Card";
import { Link } from "react-router-dom";
import { programming } from "../data/Data";

const Programming = () => {
  // Sample data for demonstration

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(programming);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    filterCards(searchValue);
  };

  const filterCards = (searchValue) => {
    const filteredCards = programming.filter((card) =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredCards);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Search Karo</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="w-full px-4 py-2 border rounded"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 max-w-5xl">
        {filteredData.map((card) => (
          <li key={card.id} className="relative min-w-20 w-80 h-60">
            <Link
              to="/notes"
              className="flex rounded-[24px] border border-dark-4 overflow-hidden cursor-pointer w-full h-full"
            >
              <Card key={card.id} title={card.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programming;
