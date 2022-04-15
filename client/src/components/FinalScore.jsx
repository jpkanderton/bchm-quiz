import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const { useState } = React;

export default () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const handleClick = () => {
    navigate("/thanks");
  };

  return (
    <div className="final-score-container">
      <p className="final-score-text" onClick={handleClick}>
        Your Final Score Is: {state.points}
      </p>
    </div>
  );
};
