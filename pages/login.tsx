import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BackButton from '@/src/components/BackButton/BackButtonComponent';
import styles from './backgroundComponent.module.css';

const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isExpanding, setIsExpanding] = useState(false);
    const [isShrinking, setIsShrinking] = useState(false);

    useEffect(() => {
        // Check if the square should be expanded
        const expandingState = localStorage.getItem('isExpanding');
        if (expandingState === 'true') {
            setIsExpanding(true);
            localStorage.removeItem('isExpanding'); // Reset after using
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        router.push('/dashboard'); // Navigate to dashboard on submit
    };

    const handleBack = () => {
        setIsShrinking(true); // Start the shrinking animation
        setTimeout(() => {
            router.push('/'); // Navigate back to the landing page after animation
        }, 500); // Match the duration with the shrinking timing
    };

    return (
        <div className={styles.background}>
            <div className={`${styles.backgroundSquare} ${isExpanding ? styles.expandedLoginSignup : ''} ${isShrinking ? styles.shrink : ''}`}>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <BackButton onBack={handleBack} />
            </div>
        </div>
    );
};

export default LoginPage;

