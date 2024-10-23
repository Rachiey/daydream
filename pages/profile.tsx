// src/pages/profile.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();
  
  // Sample user data, replace this with actual user data from your auth logic
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
  });

  const handleEditProfile = () => {
    // Logic to edit the profile goes here
    console.log('Edit Profile Clicked');
  };

  const handleLogout = () => {
    // Logic to handle logout
    console.log('Logging out...');
    // Redirect to landing page after logout
    router.push('/');
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>Profile Information</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div>
        <button onClick={handleEditProfile}>Edit Profile</button>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default ProfilePage;
