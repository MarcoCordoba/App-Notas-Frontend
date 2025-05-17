import "./Button.css";

export function Button({ onClick, children = "", className = "" }) {
  return (
    <button className={`boton ${className}`} onClick={onClick}>
      <div className="contenido-boton">
        {children}
      </div>
    </button>
  );
}
