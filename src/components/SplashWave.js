import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import LoginModal from "../components/LoginModal";
import SearchBar from "../components/SearchBar";
import wave from "../assets/greenwave.png";

const SplashWave = () => {
  return (
    <>
      <div
        className={"testcover d-flex align-items-center justify-content-center"}
      >
        <div className={"text-center"}>
          <h1 className={"bold gray"}>
            Veg Network <span className="yellow">|</span> Seoul
          </h1>
          <h5 className={"thin"}>Vegan and vegetarian finds in your city.</h5>

          <br />
          <SearchBar />
          <p className={"mt-2"}>Type an area or a food you're looking for.</p>
          <div className="home-buttons">
            <Link to="/browse">
              <button
                type={"button"}
                className={"btn btn-dark m-2 gray home-button"}
              >
                Our Finds
              </button>
            </Link>
            <button
              type={"button"}
              className={"btn btn-dark m-2 gray home-button"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Connect <FacebookIcon className={"fb-icon"} />
            </button>
          </div>
        </div>
      </div>
      <img className={"wave"} alt="Green wave" src={wave}></img>
      <LoginModal />
    </>
  );
};

export default SplashWave;
