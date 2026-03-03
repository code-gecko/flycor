import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Hydroponics: A Beginner's Guide",
    excerpt: "Learn the basics of setting up your first hydroponic system at home. From choosing the right system to selecting crops, we cover everything you need to know.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Farming Tips",
    date: "January 28, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Seasonal Recipes: Fresh Chili Dishes for the Whole Family",
    excerpt: "Discover delicious ways to use fresh chili peppers in your cooking. From mild to spicy, these recipes celebrate the versatility of our farm-fresh chilies.",
    image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Recipes",
    date: "January 20, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "The Benefits of Circular Farming: Our Approach to Sustainability",
    excerpt: "How we integrate crops, livestock, and processing to create a sustainable farming ecosystem that minimizes waste and maximizes efficiency.",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sustainability",
    date: "January 15, 2026",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Black Soldier Fly Farming: Turning Waste into Protein",
    excerpt: "Learn how we use Black Soldier Fly larvae to convert organic waste into high-quality protein feed for our livestock and fish.",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Innovation",
    date: "January 8, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Water Conservation Techniques for Small-Scale Farmers",
    excerpt: "Practical tips and techniques for conserving water on your farm while maintaining healthy crop yields throughout the dry season.",
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Farming Tips",
    date: "December 28, 2025",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Farm-to-Table: The Journey of Our Fresh Produce",
    excerpt: "Follow the journey of our vegetables from seed to harvest to your table. Learn about our quality control processes and delivery system.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Farm Life",
    date: "December 20, 2025",
    readTime: "5 min read",
  },
];

const categories = ["All", "Farming Tips", "Recipes", "Sustainability", "Innovation", "Farm Life"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Farm Blog
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Insights, tips, and stories from Flycorp Farms. Learn about sustainable
            farming, discover new recipes, and stay updated on farm life.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-secondary text-secondary-foreground">
                  Featured
                </Badge>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="w-fit text-xs mb-2"
                  >
                    {post.category}
                  </Badge>
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
