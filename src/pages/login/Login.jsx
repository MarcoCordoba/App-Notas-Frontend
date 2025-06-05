import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/AuthApi"; // importa tu API de auth

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    correo: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email: formData.correo, // o email, según tu backend
        password: formData.password,
      });

      // Guarda el token en localStorage para usarlo luego en otras requests
      localStorage.setItem("token", response.data.token);

      setError(null);
      navigate("/home");
    } catch (err) {
      console.error(err.response?.data);
      setError("Credenciales inválidas, intenta de nuevo.");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login"> 
      <Card title="Iniciar sesión" className="card-login">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="buttons-login">
            <button type="submit">Iniciar sesión</button>
            <button type="button" onClick={handleRegister}>Registrarse</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
