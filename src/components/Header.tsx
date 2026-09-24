import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const handleSubscribeClick = () => {
    const newsletterSection = document.getElementById('newsletter-section');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <header className="sticky top-0 z-40 bg-background border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ height: '44px' }}>
          {/* Left: Search Icon - Fixed Width */}
          <div className="flex items-center justify-start w-32">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground hover:text-muted-foreground transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center: Blog/About/Subscribe Links */}
          <div className="flex-1 flex items-center justify-center gap-[18px]">
            <Link
              to="/"
              className="px-1.5 text-foreground transition-opacity duration-300 font-normal"
              style={{ fontSize: '12px', letterSpacing: '-0.12px', opacity: isAboutPage ? 0.65 : 1 }}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="px-1.5 text-foreground transition-opacity duration-300 font-normal"
              style={{ fontSize: '12px', letterSpacing: '-0.12px', opacity: isAboutPage ? 1 : 0.65 }}
            >
              About
            </Link>
            <button
              onClick={handleSubscribeClick}
              className="px-1.5 text-foreground transition-opacity duration-300 font-normal hover:opacity-100"
              style={{ fontSize: '12px', letterSpacing: '-0.12px', opacity: 0.65 }}
            >
              Subscribe
            </button>
          </div>

          {/* Right: Social Icons - Fixed Width */}
          <div className="flex items-center justify-end w-32">
            <SocialIcons size="sm" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
