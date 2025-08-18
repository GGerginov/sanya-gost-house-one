import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
    priority?: boolean;
    preload?: boolean;
}

const LazyImage = ({ 
    src, 
    alt, 
    className = '', 
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4=',
    priority = false,
    preload = false
}: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (priority) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '50px' // Start loading 50px before coming into view
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    // Preload images that will likely be viewed next
    useEffect(() => {
        if (preload && !hasError) {
            const img = new Image();
            img.src = src;
            img.onload = () => setIsLoaded(true);
            img.onerror = () => setHasError(true);
        }
    }, [preload, src, hasError]);

    const handleLoad = () => {
        setIsLoaded(true);
        setHasError(false);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(false);
    };

    if (hasError) {
        return (
            <div className={`bg-muted flex items-center justify-center ${className}`}>
                <span className="text-muted-foreground text-sm">Грешка при зареждане</span>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse rounded" />
            )}
            <img
                ref={imgRef}
                src={isInView ? src : placeholder}
                alt={alt}
                className={`w-full h-full object-cover transition-all duration-500 ${
                    isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                }`}
                onLoad={handleLoad}
                onError={handleError}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
            />
        </div>
    );
};

export default LazyImage;