import { useState, useRef, useEffect, useCallback } from "react";
import { toast } from "sonner";
import heroPortrait from "@/assets/hero-beach.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [titleFontSize, setTitleFontSize] = useState(96);
  const heroRef = useRef<HTMLElement>(null);
  const scrollProgressRef = useRef(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const updateScrollProgress = useCallback(() => {
    if (!heroRef.current) return 0;

    const heroHeight = heroRef.current.offsetHeight;
    const scrolled = window.scrollY;
    const progress = Math.min(scrolled / heroHeight, 1);

    scrollProgressRef.current = progress;

    // Apply styles directly to DOM - only to image and gradient
    const opacity = 1 - progress;
    const translateY = progress * -150;

    if (imageRef.current) {
      imageRef.current.style.opacity = String(opacity);
      imageRef.current.style.transform = `translateY(${translateY}px)`;
    }

    return progress;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      updateScrollProgress();
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(updateScrollProgress, 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, [updateScrollProgress]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  // Calculate optimal font size to fit container edge-to-edge
  const calculateOptimalFontSize = useCallback(() => {
    if (!titleRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const title = titleRef.current;

    // Get available width (container width minus horizontal padding and a small buffer)
    const computedStyle = window.getComputedStyle(container);
    const paddingLeft = parseFloat(computedStyle.paddingLeft);
    const paddingRight = parseFloat(computedStyle.paddingRight);
    const buffer = paddingLeft + paddingRight; // Add 16px buffer to prevent overflow
    const containerWidth =
      container.clientWidth - paddingLeft - paddingRight - buffer;

    // Binary search for optimal font size
    let minSize = 32;
    let maxSize = 192;
    let optimalSize = minSize;

    // Create temporary element to measure text width
    const measurer = document.createElement("span");
    measurer.style.visibility = "hidden";
    measurer.style.position = "absolute";
    measurer.style.whiteSpace = "nowrap";
    measurer.style.fontFamily = '"Bebas Neue", sans-serif';
    measurer.style.fontWeight = "900";
    measurer.style.letterSpacing = "-0.05em";
    measurer.textContent = "The Culinary Chronicle";
    document.body.appendChild(measurer);

    // Binary search to find the largest font size that fits
    while (maxSize - minSize > 1) {
      const midSize = Math.floor((minSize + maxSize) / 2);
      measurer.style.fontSize = `${midSize}px`;
      const textWidth = measurer.offsetWidth;

      if (textWidth <= containerWidth) {
        optimalSize = midSize;
        minSize = midSize;
      } else {
        maxSize = midSize;
      }
    }

    document.body.removeChild(measurer);
    setTitleFontSize(optimalSize);
  }, []);

  // Update font size on mount and resize
  useEffect(() => {
    calculateOptimalFontSize();

    const resizeObserver = new ResizeObserver(() => {
      calculateOptimalFontSize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [calculateOptimalFontSize]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[500px] md:h-[650px] md:h-short:h-[570px] lg:h-[692px] lg:h-short:h-[580px] overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="fixed inset-0 h-[500px] md:h-[650px] md:h-short:h-[570px] lg:h-[692px] lg:h-short:h-[580px] mt-[44px]"
      >
        <img
          src={heroPortrait}
          alt="Elegant dining experience featuring artisanal cuisine"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* Gradient Overlay - Strong white gradient at bottom */}
      <div className="absolute inset-0 h-[500px] md:h-[650px] md:h-short:h-[570px] lg:h-[692px] lg:h-short:h-[580px] bg-gradient-to-t from-white via-white/20 to-transparent" />

      {/* Bottom Center Section - Large Name */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-10">
        <div
          ref={containerRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1
            ref={titleRef}
            className="font-display font-black uppercase tracking-display leading-[0.9] text-black text-center whitespace-nowrap"
            style={{ fontSize: `${titleFontSize}px` }}
          >
            The Culinary Chronicle
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
