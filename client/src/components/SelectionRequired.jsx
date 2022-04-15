import React from "react";

export default ({ selectionRequired }) => {
  return (
    <div className="sr-container hide-alt">
      <div className="sr-contents">
        <p className="sr-text">You need to choose an answer!</p>
        <div
          className="btn btn--escape"
          onClick={() => {
            selectionRequired(false);
          }}
        >
          Exit
        </div>
      </div>
    </div>
  );
};
