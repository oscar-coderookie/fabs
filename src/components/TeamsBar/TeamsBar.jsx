import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamsBar = () => {
  const [data, setData] = useState([]);
  const apiEndpoint =
    "https://baseball-data.p.rapidapi.com/tournament/teams";
    const config = {
        method: 'GET',
        url: '',
        params: {tournamentId: '10'},
        headers: {
          'X-RapidAPI-Key': 'f53eae9a97msh4df3677cb92444cp1f2a0bjsnfa435bce34a7',
          'X-RapidAPI-Host': 'baseball-data.p.rapidapi.com'
        }
      };

  useEffect(() => {
    axios.get(apiEndpoint,config).then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);
  return <div className="teambar">

    <ul>
       
    </ul>
  </div>;
};

export default TeamsBar;
