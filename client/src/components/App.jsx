import React from "react";
import axios from "axios";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomeScreen from "./HomeScreen.jsx";
import Question from "./Question.jsx";
import CorrectAnswer from "./CorrectAnswer.jsx";
import WrongAnswer from "./WrongAnswer.jsx";
import questionsData from "../../content.js";

const { useState } = React;

const App = () => {
  let name = "john";
  return (
    <div className="container">
      <HomeScreen />
      <div className="others hide">
        {questionsData.map((questionData, index) => {
          questionData.number = index;
          return <Question questionData={questionData} />;
        })}
        <Link to="/correct">Correct</Link>
        {/* <CorrectAnswer />
        <WrongAnswer /> */}
      </div>
    </div>
  );
};

export default App;
