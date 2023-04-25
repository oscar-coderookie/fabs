import React, { useState } from 'react';
import { getStorage, ref,uploadBytes } from "firebase/storage";
import './FileUploader.scss';


const FirebaseFileUploader = () => {
    // Create a root reference
const storage = getStorage();

// Create a reference to 'mountains.jpg'
const mountainsRef = ref(storage, 'mountains.jpg');

// Create a reference to 'images/mountains.jpg'
const mountainImagesRef = ref(storage, 'galeria-web/mountains.jpg');

 function uploadImage(file){
    const storageRef = ref(storage, 'galeria-web')
    uploadBytes(storageRef, file).then(snapshot=>{
        console.log(snapshot);
    })
 }

  return (
    <div className='file-upload'>
     <input type="file" name="" id="" onChange={e=> uploadImage(e.target.files[0])} />
    </div>
  );
};

export default FirebaseFileUploader;