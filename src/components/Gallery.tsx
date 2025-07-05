import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryImages = [
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Къща за гости' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Интериор' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Двор' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Природа' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Изглед' },
    { src: '/lovable-uploads/2d101dfc-e1cb-4d20-a883-97d173c5a333.png', alt: 'Терасата' }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-item group cursor-pointer"
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-warm hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Mirror effect */}
              <div className="mt-2 overflow-hidden rounded-lg opacity-30">
                <img 
                  src={image.src} 
                  alt={`${image.alt} reflection`}
                  className="w-full h-32 object-cover object-top transform scale-y-[-1] transition-transform duration-300 group-hover:scale-110 group-hover:scale-y-[-1.1]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          ))}
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