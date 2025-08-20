import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from "@/components/LazyImage.tsx";

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const photos = [
        { src: '/assets/gallery/DSC_3425.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3427.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3429.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3430.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3432.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3434.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3435.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3437.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3445.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3447.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3450.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3455.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3456.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3459.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3462.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3465.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3497.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3559.jpg', alt: 'Къща за гости Саня' },
        { src: '/assets/gallery/DSC_3561.jpg', alt: 'Къща за гости Саня' },
    ];

    const photosPerSlide = 4;
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
        <section id="gallery" className="py-20 bg-gradient-hero">
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
                                                 className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                                                 onClick={() => openModal(slideIndex * photosPerSlide + photoIndex)}
                                             >
                                                  <div className="relative overflow-hidden rounded-lg shadow-warm hover:shadow-glow transition-all duration-500 group-hover:shadow-2xl">
                                                     <LazyImage
                                                         src={photo.src}
                                                         alt={photo.alt}
                                                         className="w-full h-64 transition-transform duration-500 group-hover:scale-110"
                                                         priority={slideIndex === currentSlide && photoIndex < 2}
                                                         preload={slideIndex === currentSlide + 1 || slideIndex === currentSlide - 1}
                                                     />
                                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                                                         <div className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Разгледай</div>
                                                     </div>
                                                     <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                                         <div className="w-4 h-4 border-2 border-white rounded-full"></div>
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
                        aria-label="Предишна група снимки"
                    >
                        <ChevronLeft className="w-6 h-6 transition-transform duration-200 group-hover:-translate-x-0.5" />
                    </button>

                    <button
                        onClick={goToNextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
                        aria-label="Следваща група снимки"
                    >
                        <ChevronRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5" />
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
                                <LazyImage
                                    src={photos[selectedImage].src}
                                    alt={photos[selectedImage].alt}
                                    className="w-full h-[70vh] object-contain rounded-lg"
                                    priority={true}
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