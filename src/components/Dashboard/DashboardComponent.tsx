import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AddTripModal from '../UI/ModalComponent';
import TripCalendar from '../Calendar/CalendarComponent'; // Import the calendar component
import styles from './dashboard.module.css';


interface Trip {
  id: number;
  name: string;
  dates: { start: Date; end: Date }; // Use Date type for start and end dates
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTrips = async () => {
    const response = [
      { id: 1, name: 'Trip to Paris', dates: { start: new Date('2024-06-01'), end: new Date('2024-06-10') } },
      { id: 2, name: 'Beach Vacation', dates: { start: new Date('2024-07-15'), end: new Date('2024-07-22') } },
    ];
    setTrips(response);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleAddTrip = () => {
    setIsModalOpen(true);
  };

  const handleSaveTrip = (tripName: string, tripDates: { start: Date; end: Date }) => {
    const newTrip = { id: trips.length + 1, name: tripName, dates: tripDates };
    setTrips([...trips, newTrip]);
  };

  const handleTripClick = (trip: Trip) => {
    const { id, dates } = trip;
    router.push({
      pathname: `/calendar/${id}`,
      query: { start: dates.start.toISOString(), end: dates.end.toISOString() },
    });
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.dashboardTitle}>Your Trips</h1>
      {trips.length === 0 ? (
        <p>You have no trips scheduled. Click below to add a new trip.</p>
      ) : (
        <div className={styles.tripTiles}>
          {trips.map((trip) => (
            <div key={trip.id} className={styles.tripTile} onClick={() => handleTripClick(trip)}>
              <h2>{trip.name}</h2>
              <p>{`${trip.dates.start.toLocaleDateString()} - ${trip.dates.end.toLocaleDateString()}`}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleAddTrip} className={styles.addTripButton}>
        Add New Trip
      </button>

      {isModalOpen && (
        <AddTripModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveTrip}
        />
      )}
    </div>
  );
};

export default Dashboard;
