import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import heroImage1 from '@/assets/hero/DSC_3424.jpg';
import heroImage2 from '@/assets/hero/DSC_3449.jpg'
import heroImage3 from '@/assets/hero/DSC_3440.jpg';
import heroImage4 from '@/assets/hero/DSC_3478.jpg';
import heroImage5 from '@/assets/hero/DSC_3489.jpg';
import {useEffect, useState} from "react";

const Hero = () => {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4,heroImage5];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Предишна снимка"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Следваща снимка"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
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
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Отиди на снимка ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;