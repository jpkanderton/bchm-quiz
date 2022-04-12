import React from "react";
import QuestionNumber from "./QuestionNumber.jsx";
import Exit from "./Exit.jsx";
import questions from "../../content.js";

const { useState, useEffect } = React;

const Question = ({ questionData }) => {
  console.log(questionData.question);
  return (
    <div className="section">
      <div className="section-content">
        <Exit />
        <QuestionNumber number={questionData.number} />
        <div className="question-container">
          <div className="question-q-text">
            <p>{questionData.question}</p>
          </div>
          <ul className="question-answers">
            {questionData.answers.map((answer) => {
              return (
                <li>
                  <p>{answer}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container-submit">
          <button className="btn btn--submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
