import React from "react";
import Card from "../../components/card/Card";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <Card title="Registrarse" className="card-register">
      <form className="form-register" onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre" name="nombre" required />
        <input type="text" placeholder="Apellido" name="apellido" required />
        <input type="email" placeholder="Correo" name="correo" required />
        <input type="password" placeholder="Contraseña" name="password" required />
        <input type="password" placeholder="Repita la Contraseña" name="repeatPassword" required />

        <div className="buttons-register">
          <button type="button" onClick={handleLoginRedirect}>Iniciar sesión</button>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </Card>
    </div>
  );
}

export default Register;
