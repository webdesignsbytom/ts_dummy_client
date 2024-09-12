import React, { useState } from 'react';
// Context
import { useUser } from '../context/UserContext';
import Navbar from '../components/nav/Navbar';

const HomePage: React.FC = () => {
  const { user, setUser } = useUser();

  return (
    <div className='home'>
      <Navbar />
home
    </div>
  );
};

export default HomePage;
