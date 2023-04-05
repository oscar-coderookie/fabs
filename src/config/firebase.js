// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4KcDXzHjpeA7wd9TOnLA9cVe5VsT49Uo",
  authDomain: "fabs-638d3.firebaseapp.com",
  projectId: "fabs-638d3",
  storageBucket: "fabs-638d3.appspot.com",
  messagingSenderId: "267398336233",
  appId: "1:267398336233:web:6f7cc4029fc37279492a78",
  auth: {
    // Personaliza los mensajes de error para la autenticación de Firebase
    errorMessages: {
      emailAlreadyInUse: "Este correo electrónico ya está en uso.",
      invalidEmail: "El correo electrónico no es válido.",
      invalidPassword: "La contraseña no es válida.",
      weakPassword: "La contraseña debe tener al menos 6 caracteres.",
      userNotFound: "No se ha encontrado una cuenta con este correo electrónico.",
      wrongPassword: "La contraseña no es válida para esta cuenta.",
      // Añade aquí otros mensajes de error que quieras personalizar
    },
    // ...
  },
  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {db}