import React from "react";
import "./Card.css";

function Card({ title, children, className = "", style = {} }) {
  return (
    <div className={`card-container ${className}`} style={style}>
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
