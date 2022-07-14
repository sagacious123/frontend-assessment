import React from "react";

const Input = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Filter Country"
        onChange={handleChange}
        value={search}
        name="searchCountry"
        id="search-country"
      />
    </div>
  );
};

export default Input;
