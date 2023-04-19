import React, { createContext, useState, useEffect } from "react";
import {getAuth, onAuthStateChanged, getRedirectResult} from "firebase/auth";
import "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

const auth = getAuth();

  useEffect(() => {
    // Listener de Firebase Authentication para el cambio de estado de autenticación
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setCurrentUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};