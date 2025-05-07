import React from "react";
import Card from "../../components/card/Card";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Card title="Iniciar sesión" className="card-login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <div className="buttons-login">
          <button type="submit">Iniciar sesión</button>
          <button type="button" onClick={handleRegister}>Registrarse</button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
