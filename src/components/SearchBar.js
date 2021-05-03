import React from "react";

const SearchBar = () => {
  return (
    <>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="See what we've found..."
          aria-label="Search"
        />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
