import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [modalSlide, setModalSlide] = useState(0);
  
  const galleryImages = [
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Къща за гости' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Интериор' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Двор' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Природа' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Изглед' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Терасата' }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    setModalSlide(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setActiveImage((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPreviousModal = () => {
    setModalSlide((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNextModal = () => {
    setModalSlide((prev) => (prev + 1) % galleryImages.length);
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

        {/* Perspective Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4 overflow-hidden">
            {galleryImages.map((image, index) => {
              const isActive = index === activeImage;
              const offset = index - activeImage;
              const absOffset = Math.abs(offset);
              
              return (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-500 ease-out ${
                    absOffset > 2 ? 'hidden' : 'block'
                  }`}
                  style={{
                    transform: `
                      translateX(${offset * 20}px) 
                      scale(${isActive ? 1 : 0.8 - absOffset * 0.1}) 
                      translateZ(${isActive ? '0px' : '-100px'})
                    `,
                    zIndex: isActive ? 10 : 10 - absOffset,
                  }}
                  onClick={() => {
                    setActiveImage(index);
                    openModal(index);
                  }}
                >
                  <div className="gallery-item group">
                    <div className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
                      isActive 
                        ? 'shadow-glow w-80 h-64' 
                        : 'shadow-warm blur-sm hover:blur-none w-64 h-48'
                    }`}>
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Mirror effect */}
                    <div className={`mt-2 overflow-hidden rounded-lg transition-all duration-500 ${
                      isActive ? 'opacity-50 w-80 h-20' : 'opacity-30 blur-sm w-64 h-16'
                    }`}>
                      <img 
                        src={image.src} 
                        alt={`${image.alt} reflection`}
                        className="w-full h-full object-cover object-top transform scale-y-[-1] transition-transform duration-300 group-hover:scale-110 group-hover:scale-y-[-1.1]"
                        style={{
                          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation arrows */}
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
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeImage 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground hover:bg-primary/70'
                }`}
                aria-label={`Отиди на снимка ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Modal with Slider */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl max-h-full" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 z-30 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Slider */}
              <div className="relative overflow-hidden rounded-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${modalSlide * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[70vh] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Navigation Arrows */}
              <button
                onClick={goToPreviousModal}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
                aria-label="Предишна снимка"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNextModal}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
                aria-label="Следваща снимка"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setModalSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === modalSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Отиди на снимка ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;