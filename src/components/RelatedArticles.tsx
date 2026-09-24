import ArticleCard from "./ArticleCard";
import SectionHeader from "./SectionHeader";
import { relatedArticles } from "@/data/articles";

const RelatedArticles = () => {
  return (
    <section className="border-t py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Continue Reading" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
