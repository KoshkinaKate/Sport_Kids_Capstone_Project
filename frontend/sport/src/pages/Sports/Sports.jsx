import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sports.css';

const Sports = () => {
  const [sports, setSports] = useState([]);
  const [showMore, setShowMore] = useState({});

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const response = await axios.get('http://localhost:3000/sports');
      setSports(response.data.sports);
    } catch (error) {
      console.error('Error fetching sports:', error);
    }
  };

  const toggleShowMore = (id) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [id]: !prevShowMore[id],
    }));
  };

  return (
    <div className="sports-container">
      {sports.map((sport) => (
        <div key={sport._id} className="sport-card">
          <img src={sport.picture} alt={sport.title} className="sport-image" />
          <div className="sport-content">
            <h3>{sport.title}</h3>
            <p>
              {showMore[sport._id] ? sport.body : `${sport.body.substring(0, 200)}...`}
            </p>
            <button onClick={() => toggleShowMore(sport._id)}>
              {showMore[sport._id] ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sports;

