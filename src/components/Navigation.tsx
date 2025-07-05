import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-warm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">
            Къща за гости Саня
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Начало
            </button>
            <button
              onClick={() => scrollToSection('rooms')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Стаи
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Удобства
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Галерия
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Локация
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакти
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;