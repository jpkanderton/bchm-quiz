import React from "react";
import { useNavigate } from "react-router-dom";
import bchsLogo from "../imgs/BCHM-Logo-White.png";
import Components from "./Components.jsx";
// const Question = components.Question;

const { useState, useEffect } = React;

const HomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      let homeScreen = document.getElementsByClassName("loading")[0];
      homeScreen.classList.remove("loading");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/questions");
  };

  return (
    <div>
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
            <a className="btn btn--start" onClick={handleClick}>
              Start
            </a>
          </div>
        </div>
      </div>
      {/* <Question /> */}
    </div>
  );
};

export default HomeScreen;
