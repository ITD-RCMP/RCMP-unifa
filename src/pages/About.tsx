import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import SEO from "@/components/SEO";
import SocialIcons from "@/components/SocialIcons";
import aboutImage from "@/assets/hero-beach.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About"
        description="The Culinary Chronicle is a curated collection of stories exploring the intersection of food, culture, and craft. We celebrate the artistry of cooking, the passion of chefs, and the evolving landscape of dining."
      />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          {/* Text Column */}
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight text-foreground mb-8">
              About The Culinary Chronicle
            </h1>
            <div className="w-16 h-px bg-foreground mb-8" />

            <div className="space-y-6 text-foreground text-base md:text-lg font-light leading-relaxed tracking-wide">
              <p>
                The Culinary Chronicle is a curated collection of stories exploring the intersection of food, culture, and craft. We celebrate the artistry of cooking, the passion of chefs, and the evolving landscape of dining.
              </p>

              <p>
                From in-depth restaurant reviews to expert culinary tips, we bring you thoughtfully written articles that inspire both seasoned food lovers and curious newcomers. Our mission is to share the stories behind the plates—the traditions, innovations, and people that make food culture so compelling.
              </p>
            </div>
          </div>

          {/* Photo Column */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={aboutImage}
                alt="The Culinary Chronicle"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t">
          <div className="flex items-center justify-center">
            <SocialIcons size="md" />
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
