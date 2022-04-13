import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import bchsLogo from "../imgs/BCHM-Logo-White.png";

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
    let element = document.getElementsByClassName("section-home")[0];
    let next = document.getElementsByClassName("wrong-answer")[0];
    navigate("/correct");
    // element.classList.add("hide-alt");
    // next.classList.remove("hide-alt");
  };

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
          <a className="btn btn--start" onClick={handleClick}>
            Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
