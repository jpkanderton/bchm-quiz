import React from "react";
import Exit from "./Exit.jsx";
import { useNavigate } from "react-router-dom";

const CorrectAnswer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questions");
  };
  return (
    <div className=" section">
      <div className="section-content section-content-answer">
        <Exit />
        <ion-icon
          class="icon"
          name="happy-outline"
          onClick={handleClick}
        ></ion-icon>
      </div>
    </div>
  );
};

export default CorrectAnswer;
