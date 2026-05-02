"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
  itemsPerView?: number;
}

export default function Carousel({
  children,
  autoplay = false,
  interval = 5000,
  itemsPerView = 1,
}: CarouselProps) {
  const [current, setCurrent] = useState(1); // Start at 1 because of clone
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [useTransition, setUseTransition] = useState(true);

  // Responsive: reduce itemsPerView on smaller screens
  const [responsiveIPV, setResponsiveIPV] = useState(itemsPerView);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 640) setResponsiveIPV(1);
      else if (w <= 1024) setResponsiveIPV(Math.min(itemsPerView, 2));
      else setResponsiveIPV(itemsPerView);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [itemsPerView]);

  const effectiveIPV = responsiveIPV;
  
  // Chunk children into pages
  const pages: React.ReactNode[][] = [];
  for (let i = 0; i < children.length; i += effectiveIPV) {
    pages.push(children.slice(i, i + effectiveIPV));
  }
  
  const total = pages.length;
  const slides = [pages[total - 1], ...pages, pages[0]]; // Add clones

  // Reset slide index when layout changes
  useEffect(() => { setCurrent(1); }, [effectiveIPV]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setUseTransition(true);
    setCurrent((c) => c - 1);
  }, [isTransitioning]);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setUseTransition(true);
    setCurrent((c) => c + 1);
  }, [isTransitioning]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay || total <= 1) return;
    stopAutoplay();
    timerRef.current = setInterval(next, interval);
  }, [autoplay, interval, next, total]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (current === 0) {
      setUseTransition(false);
      setCurrent(total);
    } else if (current === total + 1) {
      setUseTransition(false);
      setCurrent(1);
    }
  };

  const goToPage = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setUseTransition(true);
    setCurrent(index + 1);
  };

  return (
    <div onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      <div className="carousel">
        <div
          className="carousel-track"
          onTransitionEnd={handleTransitionEnd}
          style={{ 
            transform: `translateX(-${current * 100}%)`,
            transition: useTransition ? "transform .5s cubic-bezier(.4,0,.2,1)" : "none"
          }}
        >
          {slides.map((page, i) => (
            <div key={i} className="carousel-slide">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${effectiveIPV}, 1fr)`,
                  gap: "24px",
                }}
              >
                {page}
              </div>
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <div className="carousel-dots">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === (current - 1 + total) % total ? " active" : ""}`}
                onClick={() => goToPage(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
