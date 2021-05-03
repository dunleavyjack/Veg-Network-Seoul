import React from "react";
import Header from "../components/Header";
import FindList from "../components/FindList";
import seedFinds from "../assets/seeds/seedFinds.js";

const BrowsePage = ({ finds }) => {
  return (
    <>
      <Header text={"The Latest"} />
      <FindList finds={seedFinds} />
    </>
  );
};

export default BrowsePage;
