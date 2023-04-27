import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import "./Teams.scss";
import thumbNail from "./../../assets/img/thumb.png";
import { NavLink } from "react-router-dom";
import { db } from "./../../config/firebase";
import { SpinnerLoader } from "../../components";

const Teams = () => {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "teams");
    const q = query(collectionRef, orderBy("name", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setTeams(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
      setLoading(false)
    );

    return unsub;
  }, []);

  return (
    <div className="teams__block">
      <h1 className="title__h1">CLUBES FEDERADOS:</h1>
      <div className="teams__mosaic">
        {loading ? (
          <SpinnerLoader />
        ) : (
          teams.map((team, index) => {
            return (
              <NavLink
                key={index}
                className="teams__link"
                to={`/teams/${team.id}`}
              >
                <div className="teams__card">
                  <div className="teams__card__fieldset">
                    {team.logo === undefined ? (
                      <img
                        className="teams__card__img"
                        src={thumbNail}
                        alt="thumb"
                      />
                    ) : (
                      <img
                        className="teams__card__img"
                        src={team.logo}
                        alt="thumb"
                      />
                    )}
                    <p className="teams__card__name">{team.name}</p>
                  </div>
                  <div className="teams__card__fieldset">
                    <p className="teams__card__legend">Email:</p>
                    <p className="teams__card__info">{team.email}</p>
                  </div>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Teams;
