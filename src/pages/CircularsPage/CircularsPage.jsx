import React, {useState, useEffect} from "react";
import "./CircularsPage.scss";
import { db } from "./../../config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { PdfViewer } from "../../components";

const CircularsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "circulares");
    const q = query(collectionRef, orderBy("name", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  });


  return (
    <div className="competitions__block">
       <h1 className="title__h1">Circulares:</h1>
      <div className="competitions__container">
       {data.map((element, index)=>{
        return(
          <div className="competitions__pdf">
          <p className="competitions__title">{element.name}</p>
          <PdfViewer url={element.link} />
        </div>
        )
       })}
      </div>
    </div>
  );
};

export default CircularsPage;
