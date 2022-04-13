import React from "react";
import QuestionNumber from "./QuestionNumber.jsx";
import Exit from "./Exit.jsx";
import questions from "../../content.js";

const { useState, useEffect } = React;

const Question = ({ questionData }) => {
  // console.log(`Correct answer is index: ${questionData.correct}`);

  const [selected, setSelected] = useState("no_selection");

  // useEffect(() => {
  //   selectedClass = "selected" + "_" + selected;
  //   console.log(selectedClass);
  // }, [selected]);

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
    let result = "";

    if (selected === "no_selection") {
      result = "You need to select an answer";
    } else if (selected === questionData.correct) {
      result = "You are correct";
      document.getElementByClass();
    } else {
      result = "You are incorrect";
    }

    console.log(result);
  };

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
            {questionData.answers.map((answer, index) => {
              // console.log(`answer is ${questionData.correct}`);
              if (index === questionData.correct) {
                return (
                  <li
                    onClick={() => handleClick(index)}
                    key={index}
                    class="correct"
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
