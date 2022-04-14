import React from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../../content.js";
import Question from "./Question.jsx";
import Exit from "./Exit.jsx";

const { useState } = React;

export default () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);

  //////////////// LOGIC TO CHANGE THE STATE OF THE
  const changeState = () => {
    if (state >= questionsData.length - 1) {
      navigate("/thanks");
    }
    setState(state + 1);
  };

  return (
    <div class="questions-component">
      <Exit />
      {questionsData.map((questionData, index) => {
        questionData.number = index;
        return (
          <Question
            questionData={questionData}
            number={state}
            changeState={changeState}
          />
        );
      })}
    </div>
  );
};
