import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

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

  return (
    <div className="events-container">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <div className="event-content">
            <h2>{event.title}</h2>
            <h3>{event.body}</h3>
            <h4>{event.startDate}</h4>
            <h4>{event.location}</h4>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
