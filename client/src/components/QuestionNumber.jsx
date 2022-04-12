import React from "react";

const QuestionNumber = ({ number }) => {
  return (
    <div className="question-header">
      <div className="question-number"> Question {number}</div>
    </div>
  );
};

export default QuestionNumber;
