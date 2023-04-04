// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4KcDXzHjpeA7wd9TOnLA9cVe5VsT49Uo",
  authDomain: "fabs-638d3.firebaseapp.com",
  projectId: "fabs-638d3",
  storageBucket: "fabs-638d3.appspot.com",
  messagingSenderId: "267398336233",
  appId: "1:267398336233:web:6f7cc4029fc37279492a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}