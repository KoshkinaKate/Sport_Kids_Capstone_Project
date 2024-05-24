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

  const formatText = (text) => {
    return text.split('\n').map((line, index) => {
      if (
        line.startsWith('Who Can Play:') ||
        line.startsWith('Type of Sport:') ||
        line.startsWith('Is it an Olympic Sport:') ||
        line.startsWith('Age Requirements:') ||
        line.startsWith('Pros:') ||
        line.startsWith('Cons:')
      ) {
        return (
          <p key={index}>
            <span className="highlight">{line.split(':')[0]}:</span>{' '}
            {line.split(':').slice(1).join(':')}
          </p>
        );
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className="sports-container">
      {sports.map((sport) => {
        const paragraphs = sport.body.split('\n\n');
        const firstParagraph = paragraphs[0];
        const remainingText = paragraphs.slice(1).join('\n\n');

        return (
          <div key={sport._id} className="sport-card">
            <img src={sport.picture} alt={sport.title} className="sport-image" />
            <div className="sport-content">
              <h3 className="sport-title">{sport.title}</h3>
              <div className="sport-body">
                {formatText(firstParagraph)}
                {showMore[sport._id] && formatText(remainingText)}
              </div>
              <div className="div-button">
                <button className="sports-button" onClick={() => toggleShowMore(sport._id)}>
                  {showMore[sport._id] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sports;

