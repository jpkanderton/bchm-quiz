import React from "react";
import Exit from "./Exit.jsx";

const WrongAnswer = () => {
  return (
    <div className="section wrong-answer">
      <div className="section-content">
        <Exit />
        <ion-icon class="icon" name="sad-outline"></ion-icon>
      </div>
    </div>
  );
};

export default WrongAnswer;
