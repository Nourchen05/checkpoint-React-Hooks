import React from "react";
import "./Filter.css";
import { FiSearch } from "react-icons/fi";

export default function Filter({ setNameSearch }) {
  const handleChangeNameSearch = (event) => {
    setNameSearch(event.target.value);
  };

  return (
    <div className="search">
      <div className="search-label">
        <input
          onChange={handleChangeNameSearch}
          type="text"
          placeholder="Search ..."
        />
        <FiSearch className="fiSearch" />
      </div>
    </div>
  );
}
