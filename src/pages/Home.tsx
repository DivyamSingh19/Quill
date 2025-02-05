import { useEffect, useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import LatestBlogs from '../components/LatestBlogs';
import GridLayout from '../components/Grid';
import { Hero } from '../components/Hero';
import usePreventZoom from '../components/PreventZoom';
import NewsletterBox from '../components/NewsLetter';
import Footer from '../components/Footer';

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
    }, 3000);
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
          <LatestBlogs/>
          <NewsletterBox/>
           
        </div>
      )}
       
    </div>
  );
};

export default Home;
