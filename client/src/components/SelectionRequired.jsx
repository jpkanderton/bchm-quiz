import React from "react";

export default ({ selectionRequired }) => {
  return (
    <div className="sr-container hide-alt">
      <div className="sr-contents">
        <p className="sr-text">Please Select An Answer</p>
        <button
          className="btn btn--escape"
          onClick={() => {
            selectionRequired(false);
          }}
        >
          <ion-icon class="icon-close-outline" name="close-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};
