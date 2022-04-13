import React from "react";
import { useNavigate } from "react-router-dom";

const Exit = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container-exit">
      <a onClick={handleClick}>
        <div className="exit-text">Exit</div>
        <ion-icon class="icon-exit" name="exit-outline"></ion-icon>
      </a>
    </div>
  );
};

export default Exit;
