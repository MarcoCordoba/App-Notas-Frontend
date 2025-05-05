import React from "react";
import Card from "../../components/card/Card";
import "./Login.css";

function Login() {
  return (
    <Card title="Iniciar sesión" className="card-login">
      <form>
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <div className="buttons-login">
            <button type="submit">iniciar sesion</button>
            <button type="submit">Registrarse</ button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
