import React, {useEffect, useState} from 'react';
import './GalleryDetail.scss';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./../../config/firebase";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function renderImage(item) {
  return (
    <div className="image-gallery-image">
      <img src={item} alt={item} style={{objectFit: 'cover'}} />
    </div>
  );
}

const GalleryDetail = () => {
    const [data, setData] = useState({});
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();
    const docRef = doc(db, "gallery", id);

    useEffect(() => {
        getDoc(docRef).then((doc) => {
          setData(doc.data(), doc.id);
          setPhotos(doc.data().images);
        });
      }, [docRef]);


  return (
    <div className='gallery__detail'>
        <ImageGallery 
        width="100%"
        items={photos}
        renderItem={renderImage}
        showNav={false}
        autoPlay={true} 
        showPlayButton={false}
        showFullscreenButton={false}/>
    </div>
  )
}

export default GalleryDetail