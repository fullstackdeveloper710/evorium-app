import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  const onSearchHandler = () => {
    onSearch(search);
  };
  return (
    <div className="search_block">
      <input
        type="text"
        placeholder="Search"
        onChange={onSearchChange}
        value={search}
      />
      <button type="" className="search_btn" onClick={onSearchHandler}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
