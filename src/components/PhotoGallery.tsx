import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from '@/components/LazyImage.tsx';
import image1 from '../../public/assets/gallery/DSC_3425.jpg';
import image2 from '../../public/assets/gallery/DSC_3427.jpg';
import image3 from '../../public/assets/gallery/DSC_3434.jpg';
import image4 from '../../public/assets/gallery/DSC_3435.jpg';
import image5 from '../../public/assets/gallery/DSC_3437.jpg';
import image6 from '../../public/assets/gallery/DSC_3445.jpg';
import image7 from '../../public/assets/gallery/DSC_3447.jpg';
import image8 from '../../public/assets/gallery/DSC_3450.jpg';
import image9 from '../../public/assets/gallery/DSC_3455.jpg';
import image10 from '../../public/assets/gallery/DSC_3456.jpg';
import image11 from '../../public/assets/gallery/DSC_3459.jpg';
import image12 from '../../public/assets/gallery/DSC_3462.jpg';
import image13 from '../../public/assets/gallery/DSC_3465.jpg';
import image14 from '../../public/assets/gallery/DSC_3497.jpg';
import image15 from '../../public/assets/gallery/DSC_3559.jpg';
import image16 from '../../public/assets/gallery/DSC_3561.jpg';


const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const galleryRef = useRef<HTMLElement | null>(null);

  const photos = [
    image1, image2, image3, image4,
    image5, image6, image7, image8,
    image9, image10, image11, image12,
    image13, image14, image15, image16,
  ];

  const photosPerSlide = 4;
  const totalSlides = Math.ceil(photos.length / photosPerSlide);


  useEffect(() => {
    const node = galleryRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Автоматична смяна на слайдовете само когато секцията е видима и няма отворен модал
  useEffect(() => {
    if (!isInView || selectedImage !== null) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 9000);

    return () => clearInterval(interval);
  }, [isInView, selectedImage, totalSlides]);

  // Заключване на body скрола при отворен модал + клавиатура
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKey);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [selectedImage]);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % photos.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const getCurrentSlidePhotos = () => {
    const start = currentSlide * photosPerSlide;
    const end = start + photosPerSlide;
    return photos.slice(start, end);
  };

  const currentItems = getCurrentSlidePhotos();

  return (
    <section id="gallery" ref={galleryRef as React.RefObject<HTMLElement>} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-3">Галерия</h2>
          <p className="text-muted-foreground">Разгледайте атмосферата и удобствата при нас</p>
        </div>

        <div className="relative">
          {/* Контроли за слайдове */}
          <button
            aria-label="Предишен слайд"
            onClick={goToPreviousSlide}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow hover:bg-background transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Следващ слайд"
            onClick={goToNextSlide}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow hover:bg-background transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Грид със снимки (2x2 на мобилни, 4 на десктоп) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentItems.map((photo, idx) => {
              const absoluteIndex = currentSlide * photosPerSlide + idx;
              return (
                <button
                  key={absoluteIndex}
                  onClick={() => openModal(absoluteIndex)}
                  className="group relative block overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <LazyImage
                    src={photo}
                    alt="Къща за гости Саня"
                    className="h-40 md:h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>
              );
            })}
          </div>

          {/* Индикатори за слайдовете */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Отиди на слайд ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === currentSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Модал за изображение */}
      {selectedImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Бутон за затваряне */}
            <button
              aria-label="Затвори"
              onClick={closeModal}
              className="absolute -top-10 right-0 md:top-2 md:right-2 z-10 h-10 w-10 rounded-full bg-background/90 hover:bg-background shadow flex items-center justify-center"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Предишен / Следващ */}
            <button
              aria-label="Предишна снимка"
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/90 hover:bg-background shadow flex items-center justify-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              aria-label="Следваща снимка"
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/90 hover:bg-background shadow flex items-center justify-center"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Снимка */}
            <div className="w-full">
              <LazyImage
                src={photos[selectedImage]}
                alt="Къща за гости Саня"
                className="mx-auto max-h-[85vh] w-auto object-contain rounded-md"
                priority
              />
            </div>

            {/* Брояч */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs md:text-sm text-white/90">
              {selectedImage + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;