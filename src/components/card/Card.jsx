import "./Card.css";

function Card({ title, children, className = ""}) {
  return (
    <div className={`card-container ${className}`}>
      {title && <h2 className="card-title">{title}</h2>}
      <div>
        {children}
      </div>
    </div>
  );
}

export default Card;
