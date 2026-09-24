import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Brand from "./Brand";
import { aids } from "@/data/aids";

interface NavItem {
  label: string;
  to: string;
  hint?: string;
  end?: boolean;
}

const primaryNav: NavItem[] = [
  { label: "Home", to: "/", hint: "Where to start", end: true },
  { label: "All financial aids", to: "/aids", hint: `${aids.length} programmes listed` },
  { label: "How to apply", to: "/how-to-apply", hint: "Process, documents, timing" },
];

const secondaryNav: NavItem[] = [
  { label: "Common questions", to: "/faq", hint: "Quick answers" },
  { label: "About the aid office", to: "/about", hint: "Who we are" },
];

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2 border-l-2 transition-colors duration-200 ${
    isActive
      ? "border-gold bg-navy-mid/70 text-paper"
      : "border-transparent text-paper/70 hover:text-paper hover:bg-navy-mid/40"
  }`;

const NavList = ({ items, onNavigate }: { items: NavItem[]; onNavigate?: () => void }) => (
  <nav className="space-y-1">
    {items.map((item) => (
      <NavLink key={item.to} to={item.to} end={item.end} className={navItemClass} onClick={onNavigate}>
        <span className="block text-sm font-medium">{item.label}</span>
        {item.hint && <span className="block text-xs text-paper/50 mt-0.5">{item.hint}</span>}
      </NavLink>
    ))}
  </nav>
);

const SidebarInner = ({ onNavigate }: { onNavigate?: () => void }) => (
  <div className="flex flex-col h-full">
    <div className="px-5 py-6 border-b border-paper/10">
      <Brand onNavigate={onNavigate} />
    </div>

    <div className="flex-1 overflow-y-auto px-2 py-6 space-y-8">
      <div>
        <p className="px-3 pb-2 text-[10px] uppercase tracking-label text-gold/80">Find money</p>
        <NavList items={primaryNav} onNavigate={onNavigate} />
      </div>
      <div>
        <p className="px-3 pb-2 text-[10px] uppercase tracking-label text-gold/80">Support</p>
        <NavList items={secondaryNav} onNavigate={onNavigate} />
      </div>
    </div>

    <div className="px-5 py-5 border-t border-paper/10">
      <p className="text-xs uppercase tracking-label text-paper/60">Need a human?</p>
      <p className="text-sm text-paper/80 mt-2 leading-relaxed">
        Student finance desk, placeholder room and extension. Open weekday mornings.
      </p>
      <Link
        to="/faq"
        onClick={onNavigate}
        className="inline-flex items-center gap-1.5 mt-3 text-xs uppercase tracking-label text-gold hover:text-paper transition-colors duration-200"
      >
        Ask a question <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  </div>
);

const SiteLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-72 bg-navy flex-col border-r border-navy-mid z-30">
        <SidebarInner />
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-40 bg-navy border-b border-navy-mid">
        <div className="flex items-center justify-between px-4 h-16">
          <Brand compact onNavigate={() => setDrawerOpen(false)} />
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 text-paper border border-paper/20 hover:bg-navy-mid transition-colors duration-200"
            aria-label="Open navigation"
            aria-expanded={drawerOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-navy/70 animate-fade-in"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-navy shadow-raise animate-slide-in flex flex-col">
            <div className="flex justify-end px-3 pt-3">
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 text-paper/80 hover:text-paper transition-colors duration-200"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <SidebarInner onNavigate={() => setDrawerOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <div className="lg:pl-72">
        <main id="main-content" className="min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SiteLayout;
