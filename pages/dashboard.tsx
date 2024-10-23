import React, { useEffect, useState } from 'react';
import styles from './backgroundComponent.module.css';
import Dashboard from '@/src/components/Dashboard/DashboardComponent';

const DashboardPage: React.FC =  () => {
    const [isExpanding, setIsExpanding] = useState(false);

    useEffect(() => {
        setIsExpanding(true); // Start the expansion when the component mounts
        return () => {
            setIsExpanding(false); // Reset when leaving the page
        };
    }, []);

    return (
        <div className={styles.background}>
            <div className={`${styles.backgroundSquare} ${isExpanding ? styles.expandedDashboard : ''}`}>
            <Dashboard />
            </div>
        </div>
    );
};

export default DashboardPage;
