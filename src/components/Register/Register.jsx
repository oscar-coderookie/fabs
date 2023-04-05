import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  
  const handleRegister = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    }).then((userCredential)=>{
      navigate("/login");
      alert("Club registrado exitosamente en la base de datos")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      // ..
    })
    }

  return (
    <div className="login-container">
      <h2 className="login-title">Registro</h2>
      <form className="login-form" onSubmit={handleRegister}>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
