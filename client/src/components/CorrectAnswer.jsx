import React from "react";
import Exit from "./Exit.jsx";

const CorrectAnswer = () => {
  return (
    <div className=" section">
      <div className="section-content section-content-answer">
        <Exit />
        <ion-icon class="icon" name="happy-outline"></ion-icon>
      </div>
    </div>
  );
};

export default CorrectAnswer;
