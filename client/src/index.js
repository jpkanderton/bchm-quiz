import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import CorrectAnswer from "./components/CorrectAnswer.jsx";
import Question from "./components/Question.jsx";
import Questions from "./components/Questions.jsx";
import HomeScreen from "./components/HomeScreen.jsx";
import Thanks from "./components/Thanks.jsx";

const questionRoutes = ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/correct" element={<CorrectAnswer />}></Route>
      <Route path="/questions" element={<Questions />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
