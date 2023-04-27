import React, { useState, useEffect } from "react";
import "./CompetitionsPage.scss";
import { PdfViewer } from "../../components";
import { FaTrophy } from "react-icons/fa";
import { db } from "./../../config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const CompetitionsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "competitions");
    const q = query(collectionRef, orderBy("name", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);

  return (
    <div className="competitions__block">
      <h1 className="title__h1">Competiciones:</h1>
      <div className="competitions__container">
        {data.map((element, index) => {
          return (
            <div className="competitions__pdf" key={index}>
              <p className="competitions__title">{element.name}</p>
              <PdfViewer url={element.link} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompetitionsPage;
