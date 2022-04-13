import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import CorrectAnswer from "./components/CorrectAnswer.jsx";
import Question from "./components/Question.jsx";
import Questions from "./components/Questions.jsx";

const questionRoutes = ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/correct" element={<CorrectAnswer />}></Route>
      <Route path="/questions" element={<Questions />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
