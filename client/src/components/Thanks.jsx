import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="thanks-container">
      <p className="thanks-text" onClick={handleClick}>
        Thanks for playing
      </p>
    </div>
  );
};
