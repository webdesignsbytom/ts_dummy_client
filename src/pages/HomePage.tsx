import React from 'react';
// Analytics
import { usePageTracking } from '../hooks/useAnalytics';
// Components
import Navbar from '../components/nav/Navbar';
import { HelmetItem } from '../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../utils/Constants';

const HomePage: React.FC = () => {
  usePageTracking();
  
  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Home'} desc={`Home page of ${CompanyName}.`} />

      <div className='home'>
        <Navbar />
        home
      </div>
    </>
  );
};

export default HomePage;
