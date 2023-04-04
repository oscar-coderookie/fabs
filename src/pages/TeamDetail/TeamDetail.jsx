import React, {useState, useEffect} from 'react';
import './TeamDetail.scss';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import {db} from './../../config/firebase';
import { SlideShow } from '../../components';

const TeamDetail = () => {
    const [data, setData] = useState({});
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();
    const docRef = doc(db, "teams", id);

    useEffect(() => {
        getDoc(docRef).then((doc) => {
          setData(doc.data(), doc.id);
          setPhotos(doc.data().photos);
        });
      }, [docRef]);

      


  return (
    <div className='team-detail'>
        <h1 className='team-detail__title'>{data.name}</h1>
        <div className="team-detail__gallery">
         {photos === undefined ? null : <SlideShow photos={photos}/>}
        </div>
        <div className="team-detail__info">
            <h4 className="team-detail__label">Reseña:</h4>
            <p className='team-detail__history'>{data.history}</p>
        </div>
        
    </div>
  )
}

export default TeamDetail

