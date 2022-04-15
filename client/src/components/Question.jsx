import React from "react";
import QuestionNumber from "./QuestionNumber.jsx";
import SelectionRequired from "./SelectionRequired.jsx";
import Exit from "./Exit.jsx";
import questions from "../../content.js";

const { useState, useEffect } = React;

const Question = ({
  questionData,
  questionNum,
  changeState,
  addPoint,
  selectionRequired,
}) => {
  const sectionName = "section-question-" + questionData.number;
  console.log(`current question displayed is ${questionNum}`);
  const [selected, setSelected] = useState("no_selection");

  let hideElement = questionNum - 1 !== questionData.number;

  //////////////// LOGIC TO HANDLE SELECTION OF ANSWER
  const handleClick = (index) => {
    let element = event.target;
    setSelected(element);
    let elements = document.getElementsByClassName("question-answers");

    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < elements[i].children.length; j++) {
        elements[i].children[j].classList.remove("selected");
      }
    }

    element.classList.add("selected");
  };

  const handleSubmit = () => {
    let correct = document.querySelector(`.${sectionName} .correct`);
    let button = document.querySelector(`.${sectionName} .btn--submit`);
    if (button.innerHTML === "Submit") {
      let result = "";

      if (selected === "no_selection") {
        result = "You need to select an answer";
        alert(result);
        selectionRequired(true);
      } else {
        button.innerHTML = "Next";
        if (selected === correct) {
          result = "You are correct";
          // selectedElement.style.backgroundColor = "#b38508";
          selected.style.backgroundColor = "#b38508";
          selected.style.boxShadow = "inset 0 0 0 3px green";
          addPoint(1);
        } else {
          result = "You are incorrect";
          // selected.style.backgroundColor = "#4c0021";
          selected.style.boxShadow = "inset 0 0 0 3px #4c0021";
          correct.style.boxShadow = "inset 0 0 0 3px green";
          addPoint(0);
        }
      }
      console.log(result);
    } else {
      //////////////// CHANGES THE QUESTION NUMBER BY USING THE STATE OF THE PARENT ELEMENT

      setTimeout(() => {
        changeState();
      }, 500);
    }
  };

  return (
    <div className={`section ${hideElement ? "hide-alt" : ""} ${sectionName}`}>
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
