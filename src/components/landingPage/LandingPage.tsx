"use client";
import React from 'react';
import styles from './backgroundComponent.module.css'; 
import { Button } from 'react-bootstrap';

const LandingPage: React.FC = () => {


  return (
    <div className={styles.background}>
    <div className={styles.backgroundSquare}>
      <h1 className={styles.landingPageTitle}>Daydream</h1>
      <h2 className={styles.landingPageSubTitle}>Planning the trip of your dreams</h2>
      <div className={styles.buttonGroup}>
          <Button className={styles.landingPageButton} variant="primary">LOG IN</Button>
          <Button className={styles.landingPageButton} variant="secondary">SIGN UP</Button>
          <Button className={styles.landingPageButton} variant="success">CONTINUE AS GUEST</Button>
        </div>
    </div>
    </div>
  );
};

export default LandingPage;
