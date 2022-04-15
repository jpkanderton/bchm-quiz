import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./HomeScreen.jsx";
import Question from "./Question.jsx";
import Questions from "./Questions.jsx";
import CorrectAnswer from "./CorrectAnswer.jsx";
import WrongAnswer from "./WrongAnswer.jsx";
import FinalScore from "./FinalScore.jsx";
import questionsData from "../../content.js";

const { useState } = React;

const App = () => {
  const [points, setPoints] = useState(0);

  console.log("something");
  const addPoint = () => {
    console.log("one more point");
    setPoints(state + 1);
  };

  addPoint();

  return (
    <div className="container">
      <FinalScore points={points} />
      <Questions addPoint={addPoint} />
    </div>
  );
};

export default App;
