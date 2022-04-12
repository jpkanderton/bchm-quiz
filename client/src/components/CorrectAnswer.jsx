import React from "react";

const { useState, useEffect } = React;

const CorrectAnswer = () => {
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
    <div className="question-screen">
      <div className="container">
        <div className="question">
          <ion-icon class="icon-happy" name="happy-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default CorrectAnswer;
