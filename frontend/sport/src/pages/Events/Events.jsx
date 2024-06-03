import React, { useState, useEffect } from 'react';
import axios from 'axios'; //importing for making HTTP requests 
import { FaStar } from 'react-icons/fa';
import './Events.css';

const Events = () => { 
  const [events, setEvents] = useState([]); //store the list of events fetched from the server
  const [favorites, setFavorites] = useState([]); //store favorites variables , not connected to backend yet

  useEffect(() => { //runs once when the component mounts, function loads events from the server.
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/events'); //fetches events from the server using axios
      setEvents(response.data.events); //if successful - updates 'events'
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const formatDate = (dateString) => { //function formats a date string into a more readable format, including both date and time
    // 1. Parse the date string into a Date object
    const date = new Date(dateString);

     // 2. Format the date part
    const options = { timeZone: 'America/New_York', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);//The locale to use (U.S. English)

     // 3. Format the time part
    const hours = date.getHours();
    const minutes = date.getMinutes();

     // 4. Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM'; //If hours is 12 or greater, it sets ampm to 'PM'

    // 5. Format hours and minutes
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    return `${formattedDate}, ${formattedTime}`;
  };

  
  const toggleFavorite = (eventId) => { //function toggles the favorite status of an event
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(eventId)) { //if its in favorites -> removes it, and opposite
        return prevFavorites.filter((id) => id !== eventId);
      } else {
        return [...prevFavorites, eventId];
      }
    });
  };

  return (
    <div className="events-container">
      {events.map((event) => ( // Iterates over the events array and renders each event as a card
        <div key={event._id} className="event-card"> 
        {/* By providing a unique key for each element in a list, you ensure that your React application runs efficiently and correctly maintains the state of dynamic elements. */}
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


