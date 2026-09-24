import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const NotFound = () => (
  <div className="bg-background min-h-screen">
    <SEO title="Page not found" description="The page you were looking for is not available." />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-24 md:py-32 text-center">
      <p className="text-[11px] uppercase tracking-label text-gold font-semibold">Page not found</p>
      <h1 className="mt-4 text-3xl md:text-5xl text-foreground">
        That page isn't here
      </h1>
      <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
        The link may be out of date. The list of financial aids is the safest place to pick up
        again, and the aid office can point you at the right programme.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          to="/aids"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-label font-bold hover:bg-secondary transition-colors duration-200"
        >
          Browse financial aids <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-border px-6 py-3 text-xs uppercase tracking-label font-bold text-foreground hover:bg-muted transition-colors duration-200"
        >
          Go to the start
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default NotFound;
