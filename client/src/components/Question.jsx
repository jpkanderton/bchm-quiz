import React from "react";
import QuestionNumber from "./QuestionNumber.jsx";
import Exit from "./Exit.jsx";
import questions from "../../content.js";

const { useState, useEffect } = React;

const Question = ({ questionData, questionNum, changeState, addPoint }) => {
  console.log(`current question displayed is ${questionNum}`);
  const [selected, setSelected] = useState("no_selection");

  let hideElement = questionNum - 1 !== questionData.number;

  //////////////// LOGIC TO HANDLE SELECTION OF ANSWER
  const handleClick = (index) => {
    setSelected(index);
    let element = event.target;
    let elements = document.getElementsByClassName("question-answers");

    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < elements[i].children.length; j++) {
        elements[i].children[j].classList.remove("selected");
      }
    }

    element.classList.add("selected");
  };

  const handleSubmit = () => {
    //////////////// LOGIC FOR SELECTED VS CORRECT ANSWER
    let result = "";
    let selectedElement = document.getElementsByClassName("selected")[0];
    let correctElement = document.getElementsByClassName("correct")[0];

    if (selected === "no_selection") {
      result = "You need to select an answer";
    } else if (selected === questionData.correct) {
      result = "You are correct";
      selectedElement.style.backgroundColor = "#FFBE0B";
      addPoint(1);
    } else {
      result = "You are incorrect";
      selectedElement.style.backgroundColor = "#4b1a02";
      correctElement.style.backgroundColor = "#FFBE0B";
      correctElement.style.boxShadow = "0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)";
      addPoint(0);
    }

    //////////////// CHANGES THE QUESTION NUMBER BY USING THE STATE OF THE PARENT ELEMENT
    // console.log("2");
    changeState();
  };

  return (
    <div className={`section ${hideElement ? "hide-alt" : ""}`}>
      <div className="section-content">
        <QuestionNumber number={questionData.number} />
        <div className="question-container">
          <div className="question-q-text">
            <p>{questionData.question}</p>
          </div>
          <ul className="question-answers">
            {questionData.answers.map((answer, index) => {
              if (index === questionData.correct) {
                return (
                  <li
                    onClick={() => handleClick(index)}
                    key={index}
                    className="correct"
                  >
                    <p>{answer}</p>
                  </li>
                );
              }
              return (
                <li onClick={() => handleClick(index)} key={index}>
                  <p>{answer}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container-submit">
          <button className="btn btn--submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
