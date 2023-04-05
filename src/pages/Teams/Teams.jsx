import React, {useState, useEffect }from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import './Teams.scss';
import thumbNail from './../../assets/img/thumb.png'
import { NavLink } from "react-router-dom";
import {db} from './../../config/firebase';


const Teams = () => {

    const [teams, setTeams] = useState([]);


    useEffect(() => {
        const collectionRef = collection(db, "teams")
        const q = query(collectionRef, orderBy("name", "asc"));
        const unsub = onSnapshot(q, (snapshot) =>
          setTeams(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
        );
    
        return unsub;
        
      }, []);

  return (
    <div className="teams__block">
        <h1 className="teams__title">CLUBES FEDERADOS:</h1>
        <div className="teams__mosaic">
            {teams.map((team,index) => {
        return (
        <NavLink key={index} className="teams__link" to={`/teams/${team.id}`}>
            <div  className="teams__card">
            <div className="teams__card__fieldset">
                <img className="teams__card__img" src={thumbNail} alt="thumb" />
              <p className="teams__card__name">{team.name}</p>
            </div>
            <div className="teams__card__fieldset">
              <p className="teams__card__legend">Email:</p>
              <p className="teams__card__info">{team.email}</p>
            </div>
          </div>
        </NavLink>
          
        );
      })}
        </div>
      
    </div>
  );
};

export default Teams;
