import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Rooms />
      <Amenities />
      <Location />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;