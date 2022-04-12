import React from "react";
import bchsLogo from "../imgs/BCHM-Logo-White.png";

const { useState, useEffect } = React;

const HomeScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("setting time out");
      let homeScreen = document.getElementsByClassName("loading")[0];
      console.log(homeScreen);
      homeScreen.classList.remove("loading");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section section-home loading">
      <div className="section-content">
        <div className="brand-box">
          <div className="brand-box-inner">
            <img
              src={bchsLogo}
              alt="Blaine County Historical Museum logo"
              className="bchs-logo"
            />
            <p className="bchs-text">Blaine County Historical Museum Quiz</p>
          </div>
        </div>
        <div className="btn-box--home">
          <a className="btn btn--start">Start</a>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
