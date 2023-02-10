import React from "react";
import "../styles/Button.css";

const Button = ({ children, clickHandler }) => {
  const isSign = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`button-container ${
        isSign(children) ? "sign" : null
      }`.trimEnd()}
      onClick={() => clickHandler(children)}
    >
      {children}
    </div>
  );
};

export default Button;
