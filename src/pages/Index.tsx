import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import PhotoGallery from "@/components/PhotoGallery.tsx";
import Tour360 from "@/components/Tour360.tsx";
import {SpeedInsights} from "@vercel/speed-insights/next";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Rooms />
      <Amenities />
        <PhotoGallery/>
        <Tour360/>
      <Location />
      <Contacts />
      <Footer />
        <SpeedInsights />
    </div>
  );
};

export default Index;