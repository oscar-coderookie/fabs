import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Login.scss";
import GoogleButton from 'react-google-button'
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(`¡Hola ${user}!`);
      navigate(`/users/ ${user.uid}`)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("La contraseña es incorrecta. Por favor, inténtalo de nuevo.");
      } else if (errorCode === "auth/user-not-found") {
        alert(
          "No se ha encontrado una cuenta con este correo electrónico. Por favor, regístrate primero."
        );
      } else {
        alert(errorMessage); // Muestra el mensaje de error genérico de Firebase
      }
    })
  };

const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if (user) {
        // Redirigir al usuario a su página personal
        navigate(`/users/${user.uid}`);
      }
      
      
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      alert(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
    
  };

  

  return (
    <div className="login-container">
        <h1 className="login-title">Inicio de sesión</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">
          Correo electrónico:
          <input
            type="email"
            value={email}
            placeholder="correo electrónico"
            required
            id="email"
            onChange={(event) => setEmail(event.target.value)
            }
          />
        </label>
        <label htmlFor='password'>
          Contraseña:
          <input
            type="password"
            value={password}
            id="password"
            placeholder="contraseña"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
          <button type="submit">Login</button>    
          <label>
          <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          Recuérdame
        </label>
      </form>
      <GoogleButton label='Inicia sesión con Google' className="google-btn" onClick={handleSignInWithGoogle}/>
      <div className="register-container">
        <p>¿No tienes cuenta aún?</p>
        <NavLink to='/register'>
          <button className="register-btn"> Regístrate </button>
        </NavLink>
      
      </div>
    </div>
  );
};

export default Login;
