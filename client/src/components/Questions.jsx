import React from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../../content.js";
import Question from "./Question.jsx";
const { useState } = React;

export default () => {
  const [state, setState] = useState(0);

  const changeState = () => {
    setState(state + 1);
  };

  return (
    <div class="questions-component">
      {questionsData.map((questionData, index) => {
        questionData.number = index;
        return <Question questionData={questionData} number={state} />;
      })}
    </div>
  );
};
