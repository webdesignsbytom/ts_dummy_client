import React, { useState } from 'react';
// Context
import { useUser } from '../context/UserContext';

const HomePage: React.FC = () => {
  const { user, setUser } = useUser();

  const [number, setNumber] = useState(1);

  const increment = () => setNumber((prevNumber) => prevNumber + 1);
  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className='home'>
home
    </div>
  );
};

export default HomePage;
