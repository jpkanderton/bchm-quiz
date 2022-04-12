import React from "react";
import axios from "axios";
import HomeScreen from "./HomeScreen.jsx";
import Question from "./Question.jsx";
import CorrectAnswer from "./CorrectAnswer.jsx";
import WrongAnswer from "./WrongAnswer.jsx";

const { useState } = React;

const App = () => {
  return (
    <div className="container">
      <HomeScreen />
      <Question />
      <CorrectAnswer />
      <WrongAnswer />
    </div>
  );
};

export default App;
