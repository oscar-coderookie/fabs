import React, { useState, useContext } from "react";
import "./UserPage.scss";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../config/firebase";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { AuthContext} from './../../authContext';

const UserPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "news"), {
        title: data.title,
        description: data.description,
        content: data.content,
        createdAt: new Date(),
        createdBy: data.author,
      })
        alert("Document written with ID: ", docRef.id);
        navigate("/news");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="user-page">
      <div className="user-page__info">
        <div className="user-page__fieldsets">
          <p className="user-page__label">Email:</p>
          <p className="user-page__name">{user.email}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form__news">
        <h4>Publicar noticia:</h4>
        <div>
          <label htmlFor="title">Título</label>
          <input type="text" {...register("title")} required />
        </div>
        <div>
          <label htmlFor="description">Descripción</label>
          <input type="text" {...register("description")} required />
        </div>
        <div>
          <label htmlFor="content">Contenido</label>
          <textarea {...register("content")} required />
        </div>
        <div>
          <label htmlFor="content">Autor:</label>
          <textarea {...register("author")} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Publicando..." : "Publicar"}
        </button>
      </form>
    </div>
  );
};

export default UserPage;
