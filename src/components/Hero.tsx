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
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-text-reveal">
          <span className="inline-block animate-text-glow">
            Къща за гости Саня
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
          Уютно място за почивка сред красивата българска природа
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'both'}}>
          <Button 
            size="lg"
            onClick={() => scrollToSection('rooms')}
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transform hover:scale-105 transition-all duration-300"
          >
            Разгледай стаите
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contacts')}
            className="border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300"
          >
            Свържи се с нас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;