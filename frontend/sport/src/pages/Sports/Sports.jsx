import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sports.css";

const Sports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios.get("/api/sports")
      .then(response => setSports(response.data.sports))
      .catch(error => console.error("There was an error fetching the sports!", error));
  }, []);

  return (
    <div className="sports">
      <h1>Sports</h1>
      {sports.map((sport, index) => (
        <div key={index} className="sport">
          <h2>{sport.title}</h2>
          <p>{sport.body}</p>
          <img src={sport.picture} alt={sport.title} />
        </div>
      ))}
    </div>
  );
};

export default Sports;
