import React from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../../content.js";
import Question from "./Question.jsx";

const Questions = () => {
  return (
    <div class="questions-component">
      {questionsData.map((questionData, index) => {
        questionData.number = index;
        return <Question questionData={questionData} />;
      })}
    </div>
  );
};

export default Questions;
