import { useRouter } from "next/router";
import TripCalendar from "@/src/components/Calendar/CalendarComponent"; // Adjust path to your calendar component
import EventWidget from "@/src/components/Widgets/EventsWidget"; // Adjust path to your events widget
import styles from "../backgroundComponent.module.css";
import React, { useState } from "react";

const TripCalendarPage: React.FC = () => {
  const router = useRouter();
  const { id, name, start, end } = router.query;
  const [events, setEvents] = useState<any[]>([]); // Store events here

  if (!start || !end) {
    return <p>Loading...</p>;
  }

  const tripDates = {
    start: new Date(start as string),
    end: new Date(end as string),
  };

  // Add event handling logic
  const handleAddEvent = (event: any) => {
    // Update state with new event
    setEvents((prevEvents) => [...prevEvents, event]);

    // Save to local storage if needed
    const savedEvents = localStorage.getItem('calendarEvents');
    const updatedEvents = savedEvents ? [...JSON.parse(savedEvents), event] : [event];
    localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <TripCalendar tripDates={tripDates} events={events} />
        <div className={styles.sidebarContainer}>
          <div className={styles.eventWidgetContainer}>
            <EventWidget onAddEvent={handleAddEvent} /> {/* Pass the handleAddEvent function here */}
          </div>
          <button 
            className={styles.backButton} 
            onClick={() => router.back()} // Navigate back to the previous page
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCalendarPage;
