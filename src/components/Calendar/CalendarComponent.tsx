import React, { useEffect, useState, useRef } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './TripCalendar.module.css';

interface Event {
  id: string;
  name: string;
  type: string;
  location: string;
  duration: string;
  start: Date;
  end: Date;
}

interface TripCalendarProps {
  tripDates: { start: Date; end: Date };
  events: Event[];
}

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date()),
  getDay,
  locales,
});

const TripCalendar: React.FC<TripCalendarProps> = ({ tripDates, events }) => {
  const [calendarEvents, setCalendarEvents] = useState<Event[]>([]);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    const initialEvents = savedEvents ? JSON.parse(savedEvents) : events;
    setCalendarEvents(initialEvents);
  }, [events]);

  const [{ canDrop, isOver }, drop] = useDrop<HTMLDivElement, unknown, { canDrop: boolean; isOver: boolean }>({
    accept: 'EVENT',
    drop: (item: { id: string }) => {
      const droppedEvent = events.find((event) => event.id === item.id);
      if (droppedEvent) {
        const newEvent = {
          ...droppedEvent,
          start: new Date(),
          end: new Date(new Date().getTime() + 60 * 60 * 1000),
        };
        setCalendarEvents((prevEvents) => [...prevEvents, newEvent]);
      }
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  drop(calendarRef);

  return (
    <div className={styles.tripCalendar}>
      <div className={styles.calendarContainer} ref={calendarRef}>
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
        {canDrop && isOver && <div className={styles.overlay}>Release to drop</div>}
      </div>
    </div>
  );
};

export default TripCalendar;
