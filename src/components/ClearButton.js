import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "../styles/ClearButton.css";
const ClearButton = ({ children, clickHandler }) => (
  <div className="button-clear" onClick={clickHandler}>
    {children}
  </div>
);

export default ClearButton;
