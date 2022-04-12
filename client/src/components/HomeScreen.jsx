import React from "react";
import bchsLogo from "../imgs/BCHM-Logo-White.png";

const { useState } = React;

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="container">
        <div className="quiz">
          <div className="quiz-brand-box">
            <div className="quiz-brand-box-inner">
              <img
                src={bchsLogo}
                alt="Blaine County Historical Museum logo"
                className="bchs-logo"
              />
              <p className="bchs-text">Blaine County Historical Museum Quiz</p>
            </div>
          </div>
          <div className="quiz-button-box">
            <a className="btn">Start</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
