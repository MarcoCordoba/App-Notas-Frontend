import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/AuthApi"; // importa tu api de auth

function Register() {
  const navigate = useNavigate();

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState(null);

  // Maneja cambio en inputs
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validación simple para que las contraseñas coincidan
    if (formData.password !== formData.repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Preparar datos que tu backend espera (ajusta si es necesario)
    const dataToSend = {
      username: formData.correo,  // o usa otro campo si tu backend pide username explícito
      email: formData.correo,
      password: formData.password,
    };

    try {
      const response = await registerUser(dataToSend);
      console.log("Usuario registrado:", response.data);
      setError(null);
      // Redirigir al login
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data);
      setError("Error en el registro. Revisa los datos e intenta de nuevo.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <Card title="Registrarse" className="card-register">
        <form className="form-register" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            placeholder="Repita la Contraseña"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="buttons-register">
            <button type="button" onClick={handleLoginRedirect}>
              Iniciar sesión
            </button>
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Register;
