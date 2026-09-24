import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { allArticles } from "@/data/articles";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(allArticles);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = allArticles.filter((article) => {
        const searchString = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
        return searchString.includes(query.toLowerCase());
      });
      setResults(filtered);
    } else {
      setResults(allArticles);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      {/* Search Bar Overlay (replaces nav bar) */}
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ height: '44px' }}>
            <Search className="w-3.5 h-3.5 text-muted-foreground mr-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="flex-1 bg-transparent text-foreground focus:outline-none placeholder:text-muted-foreground"
              style={{ fontSize: '12px', letterSpacing: '-0.12px' }}
              autoFocus
            />
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 ml-4"
              aria-label="Close search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Results Dropdown (below search bar) */}
        <div className="fixed left-0 right-0 z-40 bg-background border-b shadow-lg animate-fade-in" style={{ top: '44px' }}>
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <div className="px-4 sm:px-6 lg:px-8 py-3 border-b bg-muted">
              <p className="text-xs uppercase tracking-wide text-muted-foreground font-normal">
                {results.length} {results.length === 1 ? 'Article' : 'Articles'}
              </p>
            </div>

            {/* Results List */}
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
              {results.length > 0 ? (
                results.map((article) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.id}`}
                    onClick={onClose}
                    className="block px-4 sm:px-6 lg:px-8 py-6 hover:bg-muted transition-colors duration-200 border-b last:border-b-0"
                  >
                    <div className="max-w-4xl mx-auto">
                      {article.category && (
                        <span className="inline-block text-foreground text-xs font-normal uppercase tracking-wide mb-2">
                          {article.category}
                        </span>
                      )}
                      <h3 className="text-foreground text-xl md:text-2xl font-display uppercase tracking-tight leading-tight mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                        {article.excerpt}
                      </p>
                      <time className="text-xs tracking-wide font-light text-muted-foreground uppercase date-numbers">
                        {article.date}
                      </time>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="px-4 sm:px-6 lg:px-8 py-12">
                  <div className="max-w-4xl mx-auto text-center">
                    <p className="text-muted-foreground text-base mb-2">
                      No articles found for "{query}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Try searching for different keywords
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
