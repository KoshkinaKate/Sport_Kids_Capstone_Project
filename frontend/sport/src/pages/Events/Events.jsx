import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/events');
      setEvents(response.data.events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { timeZone: 'America/New_York', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    return `${formattedDate}, ${formattedTime}`;
  };

  const toggleFavorite = (eventId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(eventId)) {
        return prevFavorites.filter((id) => id !== eventId);
      } else {
        return [...prevFavorites, eventId];
      }
    });
  };

  return (
    <div className="events-container">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <div className="event-content">
            <div className='star'>
          <FaStar
              className={`favorite-icon ${favorites.includes(event._id) ? 'favorite' : ''}`}
              onClick={() => toggleFavorite(event._id)}
            />
            </div>
            <h2>{event.title}</h2>
            <h3>{event.body}</h3>
            <h5>{formatDate(event.startDate)}</h5>
            <h4>{event.location}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;


