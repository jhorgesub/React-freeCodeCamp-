import React from "react";
import "./ButtonClear.css";

const ButtonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    Clear
  </div>
);

export default ButtonClear;
