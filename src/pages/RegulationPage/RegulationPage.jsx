import React, {useState, useEffect} from 'react';
import './RegulationPage.scss';
import { PdfViewer } from '../../components';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../../config/firebase';
import logoRFEBS from './../../assets/img/febs.png';
import logoFABS from './../../assets/img/fabs-logo.png';

const RegulationRfebs = ()=>{
    const [regulationRfebs, setRegulationRfebs] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db, "REGULATION-RFEBS")
        const q = query(collectionRef, orderBy("name", "asc"));
        const unsub = onSnapshot(q, (snapshot) =>
        setRegulationRfebs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
        );
    
        return unsub;
        
      });

    return (
        <div className='regulation__section'>
        <div className="regulation__container__title">
            <img src={logoRFEBS} alt="logo-RFEBS" />
            <h2>Reglamento RFEBS:</h2>
            </div>
        <div className="regulation__container">
            
     {regulationRfebs.map((rule, index)=>{
        return(
            <div key={index} className="regulation__card">
                <p className="regulation__card__title">{rule.name}</p>
                <PdfViewer url={rule.link}/>
            </div>
        )
     })}
        </div>
    </div>
    )
}

const RegulationFabs = ()=>{
    const [fabs, setFabs] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db, "REGULATION-FABS")
        const q = query(collectionRef, orderBy("name", "asc"));
        const unsub = onSnapshot(q, (snapshot) =>
        setFabs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
        );
    
        return unsub;
        
      });
    return(
        <div className='regulation__section'>
        <div className="regulation__container__title">
            <img src={logoFABS} alt="logo-RFEBS" />
            <h2>Reglamento FABS:</h2>
            </div>
        <div className="regulation__container">
            
     {fabs.map((rule, index)=>{
        return(
            <div key={index} className="regulation__card">
                <p className="regulation__card__title">{rule.name}</p>
                <PdfViewer url={rule.link}/>
            </div>
        )
     })}
        </div>
    </div>
    )

}
const RegulationReferees = ()=>{
    const [referees, setReferees] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db, "REGULATION-REFEREES")
        const q = query(collectionRef, orderBy("name", "asc"));
        const unsub = onSnapshot(q, (snapshot) =>
        setReferees(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
        );
    
        return unsub;
        
      })


    return(
        <div className='regulation__section'>
        <div className="regulation__container__title">
            <h2>Reglamento Árbitros:</h2>
            </div>
        <div className="regulation__container">
            
     {referees.map((rule, index)=>{
        return(
            <div key={index} className="regulation__card">
                <p className="regulation__card__title">{rule.name}</p>
                <PdfViewer url={rule.link}/>
            </div>
        )
     })}
        </div>
    </div> 
    )
}

const RegulationPage = () => {

  return (
    <div className='regulation__block'>
        <h2 className="title__h1">Reglamento:</h2>
        <RegulationRfebs/>
        <RegulationFabs/>
        <RegulationReferees/>
    </div>
  )
}

export default RegulationPage