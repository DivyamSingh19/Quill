import { useEffect, useState } from 'react';
import SplashScreen from '../components/SplashScreen';

import GridLayout from '../components/Grid';
import { Hero } from '../components/Hero';
import usePreventZoom from '../components/PreventZoom';

const Home = () => {
  usePreventZoom();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen
          onAnimationEnd={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      ) : (
        <div className=" ">
          
          <Hero />
          <GridLayout/>
        </div>
      )}
    </div>
  );
};

export default Home;
