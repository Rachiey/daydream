import React from 'react';
import styles from './backgroundComponent.module.css'; // Import your styles

const MyBackgroundComponent: React.FC = () => {
  return (
    <div className={styles.background}>
      <h1>Welcome to My App</h1>
    </div>
  );
};

export default MyBackgroundComponent;