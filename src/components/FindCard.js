import React from "react";
import snack from "../assets/snack.jpeg";
// import RoomIcon from "@material-ui/icons/Room";

const FindCard = ({ name, veg, tag, location }) => {
  return (
    <>
      <li className="find-body">
        <figure className="find-figure">
          <img src={snack} alt="Vegetarian find" className={"find-image"}></img>
        </figure>
        <div className={"find-content"}>
          <h1 className="find-name">{name}</h1>
          <h5 className={"green find-tag"}>
            <span className="green">{veg}</span>
            {" | "}
            <span className="green">{tag}</span>
          </h5>
          <p className="find-detail">
            Found these at Emart in Seongsu. They were a little pricey but
            really good!
          </p>
          <div className="find-location">
            {location}
            {/* <span className={"find-price"}>{"  " + price}</span> */}
          </div>
        </div>
      </li>
    </>
  );
};

export default FindCard;
