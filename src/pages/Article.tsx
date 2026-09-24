import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import RelatedArticles from "@/components/RelatedArticles";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import ArticleHero from "@/components/ArticleHero";
import ContentWrapper from "@/components/ContentWrapper";
import SEO from "@/components/SEO";
import fineDiningImage from "@/assets/article-fine-dining-colored.jpg";

const Article = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Inside the Kitchen: Secrets from Michelin-Star Chefs"
        description="Behind the pristine white plates and meticulously arranged microgreens lies a world of precision, passion, and years of perfected technique. Discover the secrets of Michelin-star chefs."
        image={fineDiningImage}
        article={{
          publishedTime: "2025-03-15T00:00:00Z",
          author: "Chef Marcus Chen",
          section: "Restaurants",
        }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:text-sm focus:uppercase focus:tracking-label focus:font-bold"
      >
        Skip to content
      </a>
      <ReadingProgress />
      <Header />

      <ArticleHero
        image={fineDiningImage}
        title="Inside the Kitchen: Secrets from Michelin-Star Chefs"
        category="Restaurants"
        author="Chef Marcus Chen"
        date="March 15, 2025"
        readTime="8 min read"
      />

      <ContentWrapper>
        <article
          id="main-content"
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
          itemScope
          itemType="https://schema.org/Article"
        >

        <div className="max-w-2xl">
          <div
            className="text-foreground text-base md:text-lg font-light reading-text tracking-wide space-y-8"
            itemProp="articleBody"
          >
            <p className="first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-foreground first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-2">
              Behind the pristine white plates and meticulously arranged
              microgreens lies a world of precision, passion, and years of
              perfected technique. Michelin-star chefs don't just cook—they
              orchestrate symphonies of flavor, texture, and presentation that
              transform dining into art.
            </p>

            <h2 className="text-2xl font-display uppercase text-foreground mt-16 mb-6 tracking-tight">
              The Foundation: Ingredient Selection
            </h2>
            <p>
              Every legendary dish begins at the market. Top chefs wake before
              dawn to handpick ingredients, building relationships with farmers,
              fishmongers, and artisan producers. They understand that
              exceptional cuisine requires exceptional raw materials—there's no
              technique that can compensate for mediocre ingredients.
            </p>

            <h2 className="text-2xl font-display uppercase text-foreground mt-16 mb-6 tracking-tight">
              Precision and Timing
            </h2>
            <p>
              In a Michelin-starred kitchen, timing is everything. Proteins are
              cooked to exact temperatures, sauces are reduced to precise
              consistencies, and every component reaches the plate at the
              optimal moment. This obsessive attention to detail separates good
              restaurants from truly great ones.
            </p>

            <p>
              Chefs employ techniques honed over decades: the perfect sear that
              creates a caramelized crust while maintaining a tender interior,
              the delicate balance of acid that brightens without overwhelming,
              the layering of flavors that reveals something new with each bite.
            </p>

            <h2 className="text-2xl font-display uppercase text-foreground mt-16 mb-6 tracking-tight">
              The Art of Plating
            </h2>
            <p>
              Visual presentation in fine dining follows principles borrowed
              from art and architecture. Each element has purpose—color
              contrast, height variation, negative space. The plate becomes a
              canvas where chefs paint with purees, garnish with edible flowers,
              and create focal points that guide the diner's eye and fork.
            </p>

            <p>
              Beyond technique and aesthetics lies philosophy. Michelin-starred
              chefs often speak of respecting tradition while pushing
              boundaries, honoring seasonal rhythms, and creating emotional
              connections through food. Their kitchens are laboratories where
              innovation meets heritage, where every dish tells a story worth
              savoring.
            </p>
          </div>

          <AuthorBio
            name="Chef Marcus Chen"
            bio="Award-winning chef and culinary writer with over 15 years of experience in Michelin-starred kitchens across Europe and Asia. Marcus now shares his expertise through writing, consulting, and teaching the next generation of culinary artists."
          />
        </div>
        </article>

        <RelatedArticles />
        <Footer />
      </ContentWrapper>
    </div>
  );
};

export default Article;
