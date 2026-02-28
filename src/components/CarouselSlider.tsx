import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselSliderProps {
  children: React.ReactNode[];
  itemClassName?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const CarouselSlider = ({
  children,
  itemClassName,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 4000,
}: CarouselSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate active index based on scroll position
    const itemWidth = el.children[0]?.getBoundingClientRect().width || 300;
    const gap = 24;
    const idx = Math.round(el.scrollLeft / (itemWidth + gap));
    setActiveIndex(Math.min(idx, children.length - 1));
  }, [children.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      scroll("right");
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = el.children[0]?.getBoundingClientRect().width || 300;
    const gap = 24;
    el.scrollBy({ left: dir === "left" ? -(itemWidth + gap) : itemWidth + gap, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    if (!el || !el.children[i]) return;
    const child = el.children[i] as HTMLElement;
    el.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
  };

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children.map((child, i) => (
          <div key={i} className={cn("snap-start shrink-0", itemClassName)}>
            {child}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-card shadow-lg border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-card shadow-lg border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Dots */}
      {showDots && children.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === activeIndex ? "bg-primary w-6" : "bg-foreground/20 hover:bg-foreground/40"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselSlider;
