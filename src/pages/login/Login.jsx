import { useState } from "react";
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email: formData.correo, // ojo que aquí usas "email" porque tu backend espera "email"
        password: formData.password,
      });

      console.log("Respuesta login:", response); // Para depurar

      // Guarda el token directamente desde response.token
      localStorage.setItem("token", response.token);

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
            <button type="button" onClick={handleRegister}>
              Registrarse
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
