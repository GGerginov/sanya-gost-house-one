import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from "@/components/LazyImage.tsx";

// Import all gallery images
import img1 from '@/assets/gallery/DSC_3424.jpg';
import img2 from '@/assets/gallery/DSC_3427.jpg';
import img3 from '@/assets/gallery/DSC_3429.jpg';
import img4 from '@/assets/gallery/DSC_3430.jpg';
import img5 from '@/assets/gallery/DSC_3432.jpg';
import img6 from '@/assets/gallery/DSC_3434.jpg';
import img7 from '@/assets/gallery/DSC_3435.jpg';
import img8 from '@/assets/gallery/DSC_3436.jpg';
import img9 from '@/assets/gallery/DSC_3437.jpg';
import img10 from '@/assets/gallery/DSC_3438.jpg';
import img11 from '@/assets/gallery/DSC_3439.jpg';
import img12 from '@/assets/gallery/DSC_3440.jpg';
import img13 from '@/assets/gallery/DSC_3441.jpg';
import img14 from '@/assets/gallery/DSC_3442.jpg';
import img15 from '@/assets/gallery/DSC_3443.jpg';
import img16 from '@/assets/gallery/DSC_3445.jpg';
import img17 from '@/assets/gallery/DSC_3446.jpg';
import img18 from '@/assets/gallery/DSC_3447.jpg';
import img19 from '@/assets/gallery/DSC_3448.jpg';
import img20 from '@/assets/gallery/DSC_3449.jpg';
import img21 from '@/assets/gallery/DSC_3450.jpg';
import img22 from '@/assets/gallery/DSC_3451.jpg';
import img23 from '@/assets/gallery/DSC_3452.jpg';
import img24 from '@/assets/gallery/DSC_3453.jpg';
import img25 from '@/assets/gallery/DSC_3454.jpg';
import img26 from '@/assets/gallery/DSC_3455.jpg';
import img27 from '@/assets/gallery/DSC_3456.jpg';
import img28 from '@/assets/gallery/DSC_3459.jpg';
import img29 from '@/assets/gallery/DSC_3465.jpg';
import img30 from '@/assets/gallery/DSC_3497.jpg';

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const photos = [
        { src: img1, alt: 'Къща за гости Саня' },
        { src: img2, alt: 'Къща за гости Саня' },
        { src: img3, alt: 'Къща за гости Саня' },
        { src: img4, alt: 'Къща за гости Саня' },
        { src: img5, alt: 'Къща за гости Саня' },
        { src: img6, alt: 'Къща за гости Саня' },
        { src: img7, alt: 'Къща за гости Саня' },
        { src: img8, alt: 'Къща за гости Саня' },
        { src: img9, alt: 'Къща за гости Саня' },
        { src: img10, alt: 'Къща за гости Саня' },
        { src: img11, alt: 'Къща за гости Саня' },
        { src: img12, alt: 'Къща за гости Саня' },
        { src: img13, alt: 'Къща за гости Саня' },
        { src: img14, alt: 'Къща за гости Саня' },
        { src: img15, alt: 'Къща за гости Саня' },
        { src: img16, alt: 'Къща за гости Саня' },
        { src: img17, alt: 'Къща за гости Саня' },
        { src: img18, alt: 'Къща за гости Саня' },
        { src: img19, alt: 'Къща за гости Саня' },
        { src: img20, alt: 'Къща за гости Саня' },
        { src: img21, alt: 'Къща за гости Саня' },
        { src: img22, alt: 'Къща за гости Саня' },
        { src: img23, alt: 'Къща за гости Саня' },
        { src: img24, alt: 'Къща за гости Саня' },
        { src: img25, alt: 'Къща за гости Саня' },
        { src: img26, alt: 'Къща за гости Саня' },
        { src: img27, alt: 'Къща за гости Саня' },
        { src: img28, alt: 'Къща за гости Саня' },
        { src: img29, alt: 'Къща за гости Саня' },
        { src: img30, alt: 'Къща за гости Саня' },
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
                                                    <LazyImage
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
                                <LazyImage
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