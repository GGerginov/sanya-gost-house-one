import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import PhotoGallery from '../components/PhotoGallery';
import Tour360 from '../components/Tour360';
import Location from '../components/Location';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

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
      <Gallery />
      <PhotoGallery />
      <Tour360 />
      <Location />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;