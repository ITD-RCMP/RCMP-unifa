import { useRef, useEffect, useCallback } from "react";

interface ArticleHeroProps {
  image: string;
  title: string;
  category?: string;
  author?: string;
  date?: string;
  readTime?: string;
}

const ArticleHero = ({ image, title, category, author, date, readTime }: ArticleHeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      Technique: "bg-blue-500",
      Guide: "bg-green-500",
      Desserts: "bg-pink-500",
      Design: "bg-purple-500",
      Culture: "bg-amber-500",
      Cuisine: "bg-orange-500",
      Beverages: "bg-cyan-500",
      Baking: "bg-rose-500",
      Health: "bg-emerald-500",
      Entertaining: "bg-violet-500",
      Sourcing: "bg-lime-500",
      Seafood: "bg-teal-500",
      Trends: "bg-indigo-500",
      Tips: "bg-fuchsia-500",
      Travel: "bg-sky-500",
      Restaurants: "bg-red-500",
    };
    return colors[cat] || "bg-gray-500";
  };

  const updateScrollProgress = useCallback(() => {
    if (!heroRef.current) return 0;

    const heroHeight = heroRef.current.offsetHeight;
    const scrolled = window.scrollY;
    const progress = Math.min(scrolled / heroHeight, 1);

    // Apply parallax effect - fade out and translate up
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

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[500px] md:h-[650px] md:h-short:h-[570px] lg:h-[700px] lg:h-short:h-[600px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="fixed inset-0 h-[500px] md:h-[650px] md:h-short:h-[570px] lg:h-[700px] lg:h-short:h-[600px] mt-[44px]"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 h-[500px] md:h-[650px] md:h-short:h-[570px] lg:h-[700px] lg:h-short:h-[600px] bg-gradient-to-t from-white via-white/20 to-transparent" />

      {/* Article Title and Metadata */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          {category && (
            <div className="mb-4 flex justify-center">
              <span
                className={`inline-block ${getCategoryColor(category)} text-white text-xs font-normal uppercase tracking-wider px-3 py-1`}
              >
                {category}
              </span>
            </div>
          )}

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-display uppercase text-black tracking-tight leading-tight text-center mb-6"
            itemProp="headline"
          >
            {title}
          </h1>

          {(author || date || readTime) && (
            <div className="flex items-center justify-center text-xs tracking-wide font-light text-muted-foreground uppercase">
              {author && (
                <>
                  <span>By </span>
                  <span className="mx-1" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{author}</span>
                  </span>
                </>
              )}
              {author && (date || readTime) && <span className="mx-3">•</span>}
              {date && (
                <time dateTime={date} itemProp="datePublished">
                  {date}
                </time>
              )}
              {date && readTime && <span className="mx-3">•</span>}
              {readTime && <span>{readTime}</span>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
