import React from "react";

const { useState, useEffect } = React;

const Question = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("setting time out");
      let homeScreen = document.getElementsByClassName("loading")[0];
      console.log(homeScreen);
      homeScreen.classList.remove("loading");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section section-question">
      <div className="container">
        <div className="section-content section-content-question">
          <div className="question-header">
            <div className="circle-container">
              <div className="circle"></div>
            </div>
          </div>
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
    </div>
  );
};

export default Question;
