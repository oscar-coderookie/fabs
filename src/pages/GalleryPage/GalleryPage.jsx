import React, { useState, useEffect } from "react";
import "./GalleryPage.scss";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {db} from './../../config/firebase';
import { NavLink } from "react-router-dom";

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "gallery");
    const unsub = onSnapshot(collectionRef, (snapshot) =>
      setImages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      
    );
    return unsub;
  }, []);
  return (
    <div className="gallery__block">
      <h2 className="gallery__title">Galería de fotos:</h2>
      <div className="gallery__mosaic">
        {images.map((image, index) => {
          return (
            <NavLink className="gallery__link" to={`/gallery/${image.id}`} key={index}>
              <div className="gallery__card">
              <p className="gallery__legend">Galería: {new Date(image.fecha.seconds * 1000).toLocaleDateString()}</p>
                <img className="gallery__thumb" src={image.thumb} alt={image.thumb} />
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPage;
