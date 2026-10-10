"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const touchStartXRef = useRef<number | null>(null);
  const totalSlides = siteConfig.heroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;

    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const activeSlide = siteConfig.heroSlides[currentSlide] ?? siteConfig.heroSlides[0];

  return (
    <section
      id="home"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero Highlights"
      className="relative w-full h-[calc(100svh-72px)] min-h-[560px] max-h-[920px] scroll-mt-[72px] overflow-hidden bg-bg-footer select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background slide images with 600ms crossfade */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <ImageSlot
            filename={activeSlide.image}
            alt={activeSlide.alt}
            priority={currentSlide === 0}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient per DESIGN.md §2 for contrast >= 4.5:1 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c100a]/90 via-[#0c100a]/50 to-[#0c100a]/30 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Full-bleed inner: uses --gutter padding-inline so text aligns with logo */}
      <div
        className="relative z-10 w-full h-full flex flex-col justify-end pb-16 lg:pb-24"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Slide copy & CTA — left gutter aligned */}
          <div className="max-w-2xl space-y-6">
            <div className="space-y-3">
              <span className="inline-block font-mono text-xs uppercase tracking-[0.08em] text-olive-500 font-semibold">
                {siteConfig.locationLabel}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold uppercase tracking-[-0.01em] text-text-heading leading-[1.0] whitespace-pre-line drop-shadow-md">
                {activeSlide.headline}
              </h1>
            </div>

            <div className="pt-2">
              <a
                href={waLink(activeSlide.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-7 py-3.5 sm:px-8 sm:py-4 rounded-[6px] bg-btn-bg text-btn-text border border-btn-border font-display font-bold uppercase tracking-[0.02em] text-[0.8125rem] transition-all duration-180 hover:bg-btn-bg-hover hover:border-link hover:-translate-y-0.5 active:bg-btn-bg-active shadow-[0_8px_24px_rgba(53,74,33,0.55)] focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
              >
                {activeSlide.ctaLabel}
              </a>
            </div>
          </div>

          {/* Carousel Arrow Controls — right gutter aligned */}
          <div className="flex items-center gap-3 self-end lg:self-end">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full bg-surface-ctrl border border-border-hair flex items-center justify-center text-text-heading hover:border-olive-500 hover:text-link transition-colors duration-180 focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full bg-surface-ctrl border border-border-hair flex items-center justify-center text-text-heading hover:border-olive-500 hover:text-link transition-colors duration-180 focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Vertical Pager Dots — right gutter, mid-height, hidden on mobile */}
        <div
          className="absolute top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3.5 z-20"
          style={{ right: "var(--gutter)" }}
          role="tablist"
          aria-label="Slide indicators"
        >
          {siteConfig.heroSlides.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-180 focus:outline-none focus-visible:outline-2 focus-visible:outline-link",
                  isActive
                    ? "bg-text-heading scale-125"
                    : "bg-text-heading/40 hover:bg-text-heading/75"
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
