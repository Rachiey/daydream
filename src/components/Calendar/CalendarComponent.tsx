import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import styles from './TripCalendar.module.css'; 

interface CalendarProps {
  tripDates: { start: Date; end: Date };
}

const TripCalendar: React.FC<CalendarProps> = ({ tripDates }) => {
  return (
    <div className={styles.calendarContainer}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate={tripDates.start}
        height="100%" 
        events={[
          {
            title: 'Your Trip',
            start: tripDates.start,
            end: tripDates.end,
          },
        ]}
      />
    </div>
  );
};

export default TripCalendar;
