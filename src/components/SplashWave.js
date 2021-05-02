import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LoginModal from "../components/LoginModal";
import SearchBar from "../components/SearchBar";

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
            <Link href="/browse">
              <button
                type={"button"}
                className={"btn btn-dark m-2 gray home-button"}
              >
                Browse
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
      {/* <Image
        className={"wave"}
        alt="Green wave"
        src="/greenwave.png"
        width="4320"
        height="468"
        priority={true}
      /> */}
      <LoginModal />
    </>
  );
};

export default SplashWave;
