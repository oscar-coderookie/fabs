import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";

import "./FileUploader.scss";

const FirebaseFileUploader = () => {
  const [folderName, setFolderName] = useState("");
  const [files, setFiles] = useState([]);
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
  // Create a root reference
  const storage = getStorage();

  function uploadImages(e) {
    e.preventDefault();
    setIsUploadComplete(false); // resetear isUploadComplete antes de cargar nuevas imágenes
    setUploadedImageUrls([]); // resetear uploadedImageUrls antes de cargar nuevas imágenes
    const promises = files.map(file => {
      const storageRef = ref(storage, `${folderName}/${file.name}`);
      return uploadBytes(storageRef, file).then(snapshot => {
        return getDownloadURL(snapshot.ref);
      });
    });
    Promise.all(promises).then(urls => {
      setIsUploadComplete(true);
      setUploadedImageUrls(urls);
    });
  }

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setFiles(files);
  }

  return (
    <div className="file-upload">
      <form className="file__form" onSubmit={uploadImages}>
        <fieldset className="file__input">
          <label htmlFor="">Selecciona los archivos a subir</label>
          <input
          type="file"
          name=""
          id=""
          multiple
          onChange={handleFileChange}
        />
        </fieldset>
        
        <fieldset className="file__input">
          <label htmlFor="folderName">
            Escribe el nonbre que quieras asignarle al álbum:
          </label>
          <input
            type="text"
            placeholder="teclea el nombre del album de fotos"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </fieldset>

        <button className="file__btn" type="submit">Subir imagenes</button>
      </form>
      <div className="file__links">
        {isUploadComplete && (
          <div className="alert">Las imágenes se han subido correctamente.</div>
        )}
        {uploadedImageUrls.length > 0 && (
          <div>
            <h2>Links de las imágenes subidas:</h2>
            <ul>
              {uploadedImageUrls.map((url, index) => (
                <li key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirebaseFileUploader;
