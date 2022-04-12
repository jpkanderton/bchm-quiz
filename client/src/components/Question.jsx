import React from "react";
import QuestionNumber from "./QuestionNumber.jsx";
import Exit from "./Exit.jsx";
import questions from "../../content.js";

const { useState, useEffect } = React;

const Question = () => {
  return (
    <div className="section">
      <div className="section-content">
        <Exit />
        <QuestionNumber />
        <div className="question-container">
          <div className="question-q-text">
            <p>Here is a random question?</p>
          </div>
          <ul className="question-answers">
            <li>
              <p>Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1</p>
            </li>
            <li>
              <p>Answer 1</p>
            </li>
            <li>
              <p>Answer 1</p>
            </li>
            <li>
              <p>Answer 1</p>
            </li>
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
