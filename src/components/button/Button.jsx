import React from "react";
import "./Button.css";

export function Button({ onClick, children = "Crear Nota" }) {
  return (
    <button className="boton-crear" onClick={onClick}>
      {children}
    </button>
  );
}
