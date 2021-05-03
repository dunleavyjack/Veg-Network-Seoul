import React from "react";

const Header = ({ text }) => {
  return (
    <div className="container mb-3 mt-5 text-center">
      <h1>
        <span className="squiggle green bold">{text}</span>
      </h1>
    </div>
  );
};

export default Header;
