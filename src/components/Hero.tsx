import { Button } from './ui/button';
import { useState, useRef } from 'react';
import { Maximize, Minimize } from 'lucide-react';

const Hero = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFullscreen = async () => {
    if (!videoRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
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
        
        {/* Fullscreen Toggle Button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-all duration-300"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 animate-text-reveal">
          <span className="inline-block animate-text-glow">
            Къща за гости Саня
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in px-2" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
          Уютно място за почивка сред красивата българска природа
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4" style={{animationDelay: '1s', animationFillMode: 'both'}}>
          <Button 
            size="lg"
            onClick={() => scrollToSection('rooms')}
            className="w-full sm:w-auto bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Разгледай стаите
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contacts')}
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Свържи се с нас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;