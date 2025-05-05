import React from "react";
import Card from "../../components/card/Card";
import "./Register.css";

function Register() {
  return (
    <Card title="Registrarse" className="card-register">
      <form className="form-register">
        <input type="text" placeholder="Nombre" name="nombre" required />
        <input type="text" placeholder="Apellido" name="apellido" required />
        <input type="email" placeholder="Correo" name="correo" required />
        <input type="password" placeholder="Contraseña" name="password" required />
        <input type="password" placeholder="Repite la Contraseña" name="repeatPassword" required />

        <div className="buttons-register">
          <button type="button">Iniciar sesión</button>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </Card>
  );
}

export default Register;
