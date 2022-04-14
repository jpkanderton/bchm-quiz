import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./HomeScreen.jsx";
import Question from "./Question.jsx";
import CorrectAnswer from "./CorrectAnswer.jsx";
import WrongAnswer from "./WrongAnswer.jsx";
import questionsData from "../../content.js";

const { useState } = React;

const App = () => {
  return <div className="container"></div>;
};

export default App;
