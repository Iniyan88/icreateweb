// Programming.js

import React, { useState } from "react";
import Card from "../componenets/Card";
import { Link } from "react-router-dom";
const Programming = () => {
  // Sample data for demonstration
  const sampleData = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
    { id: 6, title: "Card 6" },
    { id: 7, title: "Card 7" },
    { id: 8, title: "Card 8" },
    { id: 9, title: "Card 9" },
    { id: 10, title: "Card 10" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    filterCards(searchValue);
  };

  const filterCards = (searchValue) => {
    const filteredCards = sampleData.filter((card) =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredCards);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Main Content</h1>
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
