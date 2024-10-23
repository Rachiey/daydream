import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './backgroundComponent.module.css';

const LandingPage: React.FC = () => {
    const router = useRouter();
    const [isExpanding, setIsExpanding] = useState(false);
    
    const handleNavigation = (route: string) => {
        if (!isExpanding) {
            setIsExpanding(true);
            localStorage.setItem('isExpanding', 'true'); // Set the expanding state in local storage
            setTimeout(() => {
                router.push(route);
            }, 500); // Match the duration with the animation timing
        }
    };

    return (
        <div className={styles.background}>
            <div className={`${styles.backgroundSquare} ${isExpanding ? styles.expandedLoginSignup : ''}`}>
                <h1 className={styles.landingPageTitle}>Daydream</h1>
                <h2 className={styles.landingPageSubTitle}>Your Dream Trip Planner</h2>
                <div className={styles.buttonGroup}>
                    <button onClick={() => handleNavigation('/login')} className={styles.landingPageButton}>Log In</button>
                    <button onClick={() => handleNavigation('/signup')} className={styles.landingPageButton}>Sign Up</button>
                    <button onClick={() => handleNavigation('/dashboard')} className={styles.landingPageButton}>Continue as Guest</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
