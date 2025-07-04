import heroImage from '../assets/hero-house.jpg';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Къща за гости Саня
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Уютно място за почивка сред красивата българска природа
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('rooms')}
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow"
          >
            Разгледай стаите
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contacts')}
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Свържи се с нас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;