import React, { useState, useEffect } from "react";
import FindCard from "./FindCard";

const FindList = ({ finds }) => {
  const [findDisplay, setFindDisplay] = useState([]);

  // Set initial state
  useEffect(() => {
    console.log(finds);
    setFindDisplay(finds);
  }, []);

  const filterFinds = (param, value) => {
    const theFinds = finds.filter((find) => find[param] === value);
    setFindDisplay(theFinds);
  };

  const buildFinds = (arr) => {
    const allFinds = arr.map((find) => {
      return (
        <FindCard
          key={find._id}
          name={find.name}
          veg={find.veg}
          tag={find.tag}
          price={find.price}
          location={find.location}
        />
      );
    });
    return allFinds;
  };

  return (
    <>
      {/* <button onClick={() => filterFinds("finderID", "admin")}>
        Filter by Creator
      </button>
      <button onClick={() => filterFinds("price", "3000₩")}>
        Filter by Price
      </button> */}
      <section className="container">
        <ul className="find-container">{buildFinds(findDisplay)}</ul>
      </section>
    </>
  );
};

export default FindList;
