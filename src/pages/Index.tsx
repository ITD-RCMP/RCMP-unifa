import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SEO
        title="Home"
        description="A curated collection of stories on food, design, and lifestyle. Discover thoughtfully crafted articles from expert writers and creators."
      />
      <Header />
      <Hero />
      <main className="relative w-full bg-background z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <SectionHeader title="Latest" className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-12 md:gap-16">
              {articles.filter((_, index) => index % 3 === 0).map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-12 md:gap-16">
              {articles.filter((_, index) => index % 3 === 1).map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-12 md:gap-16">
              {articles.filter((_, index) => index % 3 === 2).map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <button className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-2xl md:text-3xl font-display uppercase tracking-tight">
              Load More Articles
            </button>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
