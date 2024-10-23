import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './modal.module.css';

interface AddTripModalProps {
  onClose: () => void;
  onSave: (tripName: string, tripDates: { start: Date; end: Date }) => void;
}

const AddTripModal: React.FC<AddTripModalProps> = ({ onClose, onSave }) => {
  const [tripName, setTripName] = useState('');
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([undefined, undefined]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [startDate, endDate] = dateRange; 
    if (startDate && endDate) {
      onSave(tripName, { start: startDate, end: endDate });
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Add New Trip</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="tripName">Trip Name:</label>
            <input
              type="text"
              id="tripName"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="tripDates">Trip Dates:</label>
            <div className={styles.datePickerContainer}>
              <DatePicker
                selected={dateRange[0]}
                onChange={(update) => {
                  setDateRange(update as [Date | undefined, Date | undefined]);
                }}
                startDate={dateRange[0]}
                endDate={dateRange[1]}
                selectsRange
                placeholderText="Select start and end dates"
                dateFormat="MM/dd/yyyy"
                className={styles.dateInput}
                showPopperArrow={true}
              />
            </div>
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddTripModal;


