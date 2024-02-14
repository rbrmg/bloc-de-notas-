// LoginForm.jsx
import React, { useState } from "react";
import "./LoginForm.css"; // Importa el archivo de estilo
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, betterSetUser] = useUser();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Inicio de sesión exitoso");
        const data = await response.json();
        betterSetUser(data);
        navigate("/notes");
      } else {
        console.error("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;
