import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const { useState } = React;

export default () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const points = state ? state.points : 6;
  const totalQuestions = state ? state.totalQuestions : 6;

  const handleClick = () => {
    navigate("/thanks");
  };

  return (
    <div className="final-score-container">
      <p className="final-score-text">Your Final Score Is:</p>
      <div className="final-score-numbers-container">
        <div class="final-score-numbers">
          {points} / {totalQuestions}
        </div>
      </div>
      <div className="next-container">
        <a className="next" onClick={handleClick}>
          Next
        </a>
      </div>
    </div>
  );
};
