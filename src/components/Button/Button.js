import React from "react";
import "./Button.scss";

function Button({ buttonText, darkMode }) {
  return (
    <div className={darkMode ? "button-container--dark" : "button-container"}>
      <p>{buttonText}</p>
    </div>
  );
}

export default Button;
