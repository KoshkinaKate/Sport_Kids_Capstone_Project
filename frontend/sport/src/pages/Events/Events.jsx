import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events")
      .then(response => setEvents(response.data.events))
      .catch(error => console.error("There was an error fetching the events!", error));
  }, []);

  return (
    <div className="events">
      <h1>Events</h1>
      {events.map((event, index) => (
        <div key={index} className="event">
          <h2>{event.title}</h2>
          <p>{event.body}</p>
          <p>{event.location}</p>
          <p>{event.startDate} - {event.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
