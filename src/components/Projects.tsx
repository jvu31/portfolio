import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { projects } from "./data";

const Projects = () => {
  const filters = ["all", "machine learning", "full stack"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [displayProjects, setDisplayProjects] = useState(projects);


  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearch = () => {

  }

  return (
    <div className="page">
      {/* Heading text */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          My recent projects in machine learning and full stack development.
        </p>
      </div>
      {/* Filters and buttons */}
      <div className="flex">
        <div className="flex">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`py-2 px-1 transition-all duration-200 ease-in-out transform mr-4
            ${
              activeFilter === filter
                ? "text-white py-2 px-4 bg-indigo-600 rounded-md"
                : "hover:text-indigo-600 hover:border-indigo-600 hover:scale-105 bg-dark-gray rounded-md"
            }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center border border-gray rounded-lg bg-white ml-auto">
          <AiOutlineSearch className="text-dark_gray ml-2 text-lg" />
          <input
            type="text"
            placeholder="Search Projects..."
            className="flex-1 p-2 border-0 focus:outline-none rounded-full"
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
