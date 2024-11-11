import React, { useState } from 'react';
import styles from './EventWidget.module.css';
import EventTile from './EventTile'; // Import the draggable tile component

interface Event {
  id: number;
  name: string;
  type: string;
  location: string;
  duration: string;
}

const EventWidget: React.FC<{ onAddEvent: (event: Event) => void }> = ({ onAddEvent }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [customType, setCustomType] = useState('');
  const [eventList, setEventList] = useState<Event[]>([]);

  const handleAddEvent = () => {
    const eventType = type === 'Custom' ? customType : type;

    if (!eventType) {
      alert('Please select or enter a type for the event.');
      return;
    }

    const newEvent: Event = {
      id: Date.now(),
      name,
      type: eventType,
      location,
      duration,
    };
    setEventList((prev) => [...prev, newEvent]);
    onAddEvent(newEvent);
    setName('');
    setType('');
    setCustomType('');
    setLocation('');
    setDuration('');
  };

  return (
    <div className={styles.eventWidgetContainer}>
      <div className={styles.eventWidget}>
        <h3>Add Event</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Cafe">Cafe</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Park">Park</option>
          <option value="Temple/Shrine">Temple/Shrine</option>
          <option value="Theme Park">Theme Park</option>
          <option value="Club">Club</option>
          <option value="Museum">Museum</option>
          <option value="Art Gallery">Art Gallery</option>
          <option value="Travel">Travel</option>
          <option value="Market">Market</option>
          <option value="Hike">Hike</option>
          <option value="Custom">Custom</option>
        </select>
        {type === 'Custom' && (
          <input
            type="text"
            placeholder="Enter custom type"
            value={customType}
            onChange={(e) => setCustomType(e.target.value)}
          />
        )}
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button
          className={styles.eventsButton}
          onClick={handleAddEvent}
        >
          Add
        </button>
      </div>
      <div className={styles.eventTilesContainer}>
        {eventList.map((event) => (
          <EventTile key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventWidget;
