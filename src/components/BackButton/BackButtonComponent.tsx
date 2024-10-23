// src/components/BackButton.tsx

import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../pages/backgroundComponent.module.css';

interface BackButtonProps {
  onBack: () => void; // Prop to handle back action
}

const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
  return (
    <button onClick={onBack} className={styles.landingPageButton}>
      Back
    </button>
  );
};

export default BackButton;
