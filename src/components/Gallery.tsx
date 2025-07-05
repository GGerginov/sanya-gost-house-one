import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Къща за гости' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Интериор' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Двор' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Природа' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Изглед' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Терасата' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Галерия
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Разгледайте снимки от нашата красива къща за гости и околностите
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main slider */}
          <div className="relative overflow-hidden rounded-lg shadow-glow">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="gallery-item group cursor-pointer">
                    <div 
                      className="relative overflow-hidden"
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Mirror effect */}
                    <div className="mt-2 overflow-hidden opacity-40">
                      <img 
                        src={image.src} 
                        alt={`${image.alt} reflection`}
                        className="w-full h-24 object-cover object-top transform scale-y-[-1] transition-transform duration-300 group-hover:scale-105 group-hover:scale-y-[-1.05]"
                        style={{
                          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
            aria-label="Предишна снимка"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
            aria-label="Следваща снимка"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground hover:bg-primary/70'
                }`}
                aria-label={`Отиди на снимка ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;