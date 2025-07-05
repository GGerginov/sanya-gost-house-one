import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Placeholder Logo */}
        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse">
          <span className="text-2xl font-bold text-primary-foreground">С</span>
        </div>

        <h1 className="text-3xl font-bold text-primary mb-4 animate-text-glow">
          Къща за гости Саня
        </h1>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-muted-foreground mt-4 text-sm">
          Зареждане... {progress}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;