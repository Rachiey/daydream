import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BackButton from '@/src/components/BackButton/BackButtonComponent';
import styles from './backgroundComponent.module.css';

const SignupPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [isExpanding, setIsExpanding] = useState(false);
    const [isShrinking, setIsShrinking] = useState(false);

    useEffect(() => {
        setIsExpanding(true); // Start the expansion when the component mounts
        return () => {
            setIsExpanding(false); // Reset when leaving the page
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        router.push('/dashboard');
    };

    const handleBack = () => {
        setIsShrinking(true);
        setTimeout(() => {
            router.push('/'); // Navigate back to the landing page after animation
        }, 500); // Match the duration with the animation timing
    };

    return (
        <div className={styles.background}>
            <div className={`${styles.backgroundSquare} ${isExpanding ? styles.expandedLoginSignup : ''} ${isShrinking ? styles.shrink : ''}`}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <BackButton onBack={handleBack} />
            </div>
        </div>
    );
};

export default SignupPage;
