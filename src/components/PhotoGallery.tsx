import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 30 photos for the carousel
  const photos = [
    { src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&h=600', alt: 'Living room with couch' },
    { src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&h=600', alt: 'Room interior' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600', alt: 'Nature view' },
    { src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=600', alt: 'Outdoor space' },
    { src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&h=600', alt: 'Garden area' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=600', alt: 'Mountain landscape' },
    { src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=600', alt: 'Deer in nature' },
    { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=600', alt: 'Waterfall' },
    { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=600', alt: 'Orange flowers' },
    { src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=600', alt: 'River mountains' },
    { src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&h=600', alt: 'Pine trees' },
    { src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&h=600', alt: 'Trees daylight' },
    { src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&h=600', alt: 'Sunlight through trees' },
    { src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&h=600', alt: 'Starry night' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&h=600', alt: 'Mountain summit' },
    { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=600', alt: 'Ocean wave' },
    { src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800&h=600', alt: 'Mountain alps' },
    { src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&h=600', alt: 'River rocks' },
    { src: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&h=600', alt: 'Desert sand' },
    { src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&h=600', alt: 'Rocky mountain' },
    { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=600', alt: 'Green mountains' },
    { src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&h=600', alt: 'Grass mountain' },
    { src: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&h=600', alt: 'Building view' },
    { src: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&h=600', alt: 'Gray building' },
    { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600', alt: 'White building' },
    { src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&h=600', alt: 'Concrete building' },
    { src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&h=600', alt: 'Glass building' },
    { src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&h=600', alt: 'Buildings worms eye' },
    { src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&h=600', alt: 'Low angle building' },
    { src: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&h=600', alt: 'White concrete' }
  ];

  const photosPerSlide = 4; // Show 4 photos per slide
  const totalSlides = Math.ceil(photos.length / photosPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const getCurrentSlidePhotos = () => {
    const start = currentSlide * photosPerSlide;
    const end = start + photosPerSlide;
    return photos.slice(start, end);
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Фото Галерия
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Открийте красотата на нашето място през тези снимки
          </p>
        </div>

        {/* Carousel Gallery */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                    {photos.slice(slideIndex * photosPerSlide, (slideIndex + 1) * photosPerSlide).map((photo, photoIndex) => (
                      <div
                        key={slideIndex * photosPerSlide + photoIndex}
                        className="group cursor-pointer"
                        onClick={() => openModal(slideIndex * photosPerSlide + photoIndex)}
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-warm hover:shadow-glow transition-all duration-300">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-white text-lg font-medium">Разгледай</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPreviousSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
            aria-label="Предишна група снимки"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
            aria-label="Следваща група снимки"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground hover:bg-primary/70'
                }`}
                aria-label={`Отиди на група ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Modal with slider */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 z-30 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative">
                <img 
                  src={photos[selectedImage].src}
                  alt={photos[selectedImage].alt}
                  className="w-full h-[70vh] object-contain rounded-lg"
                />
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

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {selectedImage + 1} / {photos.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;