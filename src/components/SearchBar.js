import React from "react";

const SearchBar = () => {
  return (
    <>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="See what we've found..."
          aria-label="Search"
        />
        <button class="btn btn-dark" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
