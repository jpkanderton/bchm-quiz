import React from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../../content.js";
import Question from "./Question.jsx";
import Exit from "./Exit.jsx";

const { useState, useEffect } = React;

export default () => {
  const navigate = useNavigate();
  const [questionNum, changeQuestion] = useState(1);
  const [points, setPoints] = useState(0);
  const [nextSection, setNS] = useState(false);
  console.log(`point total is: ${points}`);

  //////////////// LOGIC TO ADD POINT

  const addPoint = (amnt) => {
    setPoints(points + amnt);
  };

  //////////////// LOGIC TRIGGER A ROUTE CHANGE
  useEffect(() => {
    if (nextSection) {
      navigate("/finalScore", { state: { points: points } });
    }
  }, [nextSection]);

  //////////////// LOGIC TO CHANGE THE QUESTION NUMBER
  const changeState = () => {
    if (questionNum >= questionsData.length) {
      setNS(true);
    }
    changeQuestion(questionNum + 1);
  };

  return (
    <div className="questions-component">
      <Exit />
      {questionsData.map((questionData, index) => {
        questionData.number = index;
        return (
          <Question
            key={index}
            questionData={questionData}
            questionNum={questionNum}
            changeState={changeState}
            addPoint={addPoint}
          />
        );
      })}
    </div>
  );
};
