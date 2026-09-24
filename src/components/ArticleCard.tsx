import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  featured?: boolean;
  aspectRatio?: "square" | "portrait" | "landscape";
  category?: string;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  date,
  image,
  featured = false,
  aspectRatio = "landscape",
  category,
}: ArticleCardProps) => {
  const aspectClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  }[aspectRatio];

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
      Tips: "bg-sky-500",
      Travel: "bg-fuchsia-500",
    };
    return colors[cat] || "bg-gray-500";
  };

  return (
    <Link to={`/article/${id}`}>
      <article className={`bg-background group cursor-pointer ${featured ? "md:col-span-2" : ""}`}>
        <div className={`relative overflow-hidden ${aspectClass}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            loading="lazy"
          />
        </div>

        <div className="py-6">
          {category && (
            <span
              className={`inline-block ${getCategoryColor(category)} text-white text-xs font-normal uppercase tracking-wider px-3 py-1 mb-3`}
            >
              {category}
            </span>
          )}
          <h3 className="text-foreground text-2xl md:text-3xl font-display uppercase tracking-tight leading-tight">
            {title}
          </h3>
          <time className="text-xs tracking-wide font-light text-muted-foreground uppercase mt-3 block date-numbers">{date}</time>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
