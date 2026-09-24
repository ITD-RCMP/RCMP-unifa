import pastaImage from "@/assets/blog-pasta.jpg";
import marketImage from "@/assets/blog-market.jpg";
import chocolateImage from "@/assets/blog-chocolate.jpg";
import kitchenImage from "@/assets/blog-kitchen.jpg";
import sushiImage from "@/assets/blog-sushi.jpg";
import coffeeImage from "@/assets/blog-coffee.jpg";
import mediterraneanImage from "@/assets/blog-mediterranean.jpg";
import wineImage from "@/assets/blog-wine.jpg";
import croissantImage from "@/assets/blog-croissant.jpg";
import smoothieImage from "@/assets/blog-smoothie.jpg";
import cheeseImage from "@/assets/blog-cheese.jpg";
import saladImage from "@/assets/blog-salad.jpg";
import pizzaImage from "@/assets/blog-pizza.jpg";
import macaronsImage from "@/assets/blog-macarons.jpg";
import ramenImage from "@/assets/blog-ramen.jpg";
import oystersImage from "@/assets/blog-oysters.jpg";
import tacosImage from "@/assets/blog-tacos.jpg";
import cocktailImage from "@/assets/blog-cocktail.jpg";
import breadImage from "@/assets/blog-bread.jpg";
import curryImage from "@/assets/blog-curry.jpg";
import sourdoughImage from "@/assets/article-sourdough.jpg";
import seasonalImage from "@/assets/article-seasonal.jpg";
import travelImage from "@/assets/article-travel.jpg";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  aspectRatio: "square" | "portrait" | "landscape";
  category: string;
}

export const articles: Article[] = [
  {
    id: "artisan-pasta-making",
    title: "The Art of Handmade Pasta: Tradition Meets Technique",
    excerpt: "Discover the ancient craft of pasta making and how artisans keep this culinary tradition alive through dedication and skill.",
    date: "March 20, 2025",
    image: pastaImage,
    aspectRatio: "square",
    category: "Technique",
  },
  {
    id: "farmers-market-guide",
    title: "Your Complete Guide to Shopping at Farmers Markets",
    excerpt: "Navigate the vibrant world of local produce with expert tips on selecting the freshest seasonal ingredients.",
    date: "March 18, 2025",
    image: marketImage,
    aspectRatio: "portrait",
    category: "Guide",
  },
  {
    id: "luxury-chocolate",
    title: "The Science and Art of Fine Chocolate Making",
    excerpt: "From bean to bar, explore the meticulous process behind creating luxury chocolate desserts.",
    date: "March 16, 2025",
    image: chocolateImage,
    aspectRatio: "square",
    category: "Desserts",
  },
  {
    id: "kitchen-design",
    title: "Modern Kitchen Design: Where Function Meets Beauty",
    excerpt: "Transform your cooking space with these contemporary design principles that blend style and practicality.",
    date: "March 14, 2025",
    image: kitchenImage,
    aspectRatio: "portrait",
    category: "Design",
  },
  {
    id: "sushi-mastery",
    title: "The Discipline of Sushi: Years of Training for Perfection",
    excerpt: "Understanding the dedication required to master the delicate art of sushi preparation and presentation.",
    date: "March 12, 2025",
    image: sushiImage,
    aspectRatio: "square",
    category: "Technique",
  },
  {
    id: "coffee-culture",
    title: "Third Wave Coffee: The New Era of Artisan Brewing",
    excerpt: "Explore the movement that's elevating coffee from commodity to craft, one pour-over at a time.",
    date: "March 10, 2025",
    image: coffeeImage,
    aspectRatio: "portrait",
    category: "Culture",
  },
  {
    id: "mediterranean-diet",
    title: "Mediterranean Cuisine: The Diet That's Actually Delicious",
    excerpt: "Why this ancient way of eating continues to be celebrated for both health and flavor.",
    date: "March 8, 2025",
    image: mediterraneanImage,
    aspectRatio: "square",
    category: "Cuisine",
  },
  {
    id: "wine-tasting",
    title: "Terroir and Time: Understanding Fine Wine Appreciation",
    excerpt: "Learn to taste wine like a sommelier and discover the stories behind every bottle.",
    date: "March 6, 2025",
    image: wineImage,
    aspectRatio: "portrait",
    category: "Beverages",
  },
  {
    id: "french-pastry",
    title: "The Golden Layers: Mastering French Viennoiserie",
    excerpt: "Unlock the secrets of creating perfectly flaky croissants and other French pastry classics.",
    date: "March 4, 2025",
    image: croissantImage,
    aspectRatio: "square",
    category: "Baking",
  },
  {
    id: "healthy-bowls",
    title: "Bowl Food Revolution: Nutrition Meets Instagram Aesthetics",
    excerpt: "How smoothie bowls and Buddha bowls became the canvas for healthy, beautiful eating.",
    date: "March 2, 2025",
    image: smoothieImage,
    aspectRatio: "portrait",
    category: "Health",
  },
  {
    id: "cheese-board",
    title: "Curating the Perfect Cheese Board for Every Occasion",
    excerpt: "Master the art of cheese pairing and presentation with guidance from expert affineurs.",
    date: "February 28, 2025",
    image: cheeseImage,
    aspectRatio: "square",
    category: "Entertaining",
  },
  {
    id: "farm-to-table",
    title: "Farm to Table: Building Relationships with Local Growers",
    excerpt: "The movement that's changing how restaurants source ingredients and tell their culinary stories.",
    date: "February 26, 2025",
    image: saladImage,
    aspectRatio: "portrait",
    category: "Sourcing",
  },
  {
    id: "pizza-craft",
    title: "The Perfect Pizza: Temperature, Time, and Tradition",
    excerpt: "From Naples to New York, understanding what makes great pizza across different styles.",
    date: "February 24, 2025",
    image: pizzaImage,
    aspectRatio: "square",
    category: "Technique",
  },
  {
    id: "french-macarons",
    title: "Macarons: The Technical Challenge of Parisian Pastry",
    excerpt: "Why these delicate cookies require precision, patience, and plenty of practice.",
    date: "February 22, 2025",
    image: macaronsImage,
    aspectRatio: "portrait",
    category: "Desserts",
  },
  {
    id: "ramen-culture",
    title: "Beyond Instant: The Deep Culture of Authentic Ramen",
    excerpt: "Discover the regional varieties and craftsmanship behind Japan's beloved comfort food.",
    date: "February 20, 2025",
    image: ramenImage,
    aspectRatio: "square",
    category: "Culture",
  },
  {
    id: "oyster-experience",
    title: "The Art of Oyster Appreciation: From Sea to Plate",
    excerpt: "Understanding the nuances of different oyster varieties and how to enjoy them properly.",
    date: "February 18, 2025",
    image: oystersImage,
    aspectRatio: "portrait",
    category: "Seafood",
  },
  {
    id: "street-tacos",
    title: "Street Tacos: The Soul of Mexican Culinary Culture",
    excerpt: "How simple ingredients and bold flavors create one of the world's most beloved dishes.",
    date: "February 16, 2025",
    image: tacosImage,
    aspectRatio: "square",
    category: "Culture",
  },
  {
    id: "craft-cocktails",
    title: "The Renaissance of Craft Cocktails and Mixology",
    excerpt: "Modern bartenders are rediscovering classic techniques while inventing new flavor combinations.",
    date: "February 14, 2025",
    image: cocktailImage,
    aspectRatio: "portrait",
    category: "Beverages",
  },
  {
    id: "artisan-bread",
    title: "The Sourdough Revolution: Slow Fermentation, Deep Flavor",
    excerpt: "Why traditional bread-making methods are experiencing a remarkable comeback.",
    date: "February 12, 2025",
    image: breadImage,
    aspectRatio: "square",
    category: "Baking",
  },
  {
    id: "thai-curry",
    title: "Thai Curry: Balancing Heat, Sweet, Sour, and Salt",
    excerpt: "Understanding the complex flavor profiles that make Thai cuisine so captivating.",
    date: "February 10, 2025",
    image: curryImage,
    aspectRatio: "portrait",
    category: "Cuisine",
  },
];

export const relatedArticles: Article[] = [
  {
    id: "sourdough-revival",
    title: "The Sourdough Revival: Why Artisan Bread is Back",
    excerpt: "From home bakers to top restaurants, discover why this ancient fermentation technique is dominating the culinary scene.",
    date: "March 10, 2025",
    image: sourdoughImage,
    aspectRatio: "landscape",
    category: "Trends",
  },
  {
    id: "seasonal-cooking",
    title: "Cooking with the Seasons: A Guide to Fresh Ingredients",
    excerpt: "Learn how to select, store, and prepare seasonal produce like a pro chef with these essential tips.",
    date: "February 28, 2025",
    image: seasonalImage,
    aspectRatio: "landscape",
    category: "Tips",
  },
  {
    id: "travel-cuisine",
    title: "Global Flavors: A Culinary Journey Through Asia",
    excerpt: "Explore the diverse and rich culinary traditions that make Asian cuisine a world favorite.",
    date: "February 20, 2025",
    image: travelImage,
    aspectRatio: "landscape",
    category: "Travel",
  },
];

// Combined array of all articles for search
export const allArticles = [...articles, ...relatedArticles];
