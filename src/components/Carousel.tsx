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
  const [current, setCurrent] = useState(0);
  const total = Math.ceil(children.length / itemsPerView);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(next, interval);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoplay, interval, next]);

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Chunk children into pages
  const pages: React.ReactNode[][] = [];
  for (let i = 0; i < children.length; i += itemsPerView) {
    pages.push(children.slice(i, i + itemsPerView));
  }

  return (
    <div onMouseEnter={stopAutoplay}>
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {pages.map((page, i) => (
            <div key={i} className="carousel-slide">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${itemsPerView}, 1fr)`,
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
                className={`carousel-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
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
