import { useRouter } from 'next/router';
import TripCalendar from '@/src/components/Calendar/CalendarComponent';// Adjust path to your calendar component
import styles from '../backgroundComponent.module.css';

const TripCalendarPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { start, end } = router.query;

  if (!start || !end) {
    return <p>Loading...</p>;
  }

  const tripDates = {
    start: new Date(start as string),
    end: new Date(end as string),
  };

  return (
    <div className={styles.background}>
      <h1>Trip Calendar for Trip ID: {id}</h1>
      <TripCalendar tripDates={tripDates} />
    </div>
  );
};

export default TripCalendarPage;

