import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './EventWidget.module.css';

interface Event {
  id: number;
  name: string;
  type: string;
  location: string;
  duration: string;
}

const EventTile: React.FC<{ event: Event }> = React.memo(({ event }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'EVENT',
    item: { id: event.id, name: event.name, type: event.type, location: event.location, duration: event.duration },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef as any}
      className={styles.eventTile}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <h4>{event.name}</h4>
      <p>{event.type}</p>
      <p>{event.location}</p>
      <p>{event.duration}</p>
    </div>
  );
});

export default EventTile;
