import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CAROUSEL_IMAGES } from '../constants/images';
import type { CarouselImage } from '../types';

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrentIndex((current) => (current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const next = () => setCurrentIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);

  return (
    <div className="relative h-screen">
      {CAROUSEL_IMAGES.map((image: CarouselImage, index: number) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={`${image.url}?auto=format&fit=crop&w=1950&q=80`}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl text-white font-bold text-center">{image.title}</h2>
          </div>
        </div>
      ))}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}