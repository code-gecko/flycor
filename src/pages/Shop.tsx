import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Filter, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Vegetables", "Processed", "Poultry", "Fish", "Meat"];

const products = [
  {
    id: 1,
    name: "Fresh Chili Peppers",
    description: "Locally grown, premium quality chili peppers",
    price: "UGX 15,000",
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Fresh",
    category: "vegetables",
  },
  {
    id: 2,
    name: "Dried Chili Flakes",
    description: "Sun-dried and processed chili flakes",
    price: "UGX 25,000",
    unit: "per 500g",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Processed",
    category: "processed",
  },
  {
    id: 3,
    name: "Fresh Eggs",
    description: "Free-range eggs from our healthy chickens",
    price: "UGX 12,000",
    unit: "per tray",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Organic",
    category: "poultry",
  },
  {
    id: 4,
    name: "Sweet Peppers",
    description: "Colorful bell peppers from our greenhouse",
    price: "UGX 20,000",
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Fresh",
    category: "vegetables",
  },
  {
    id: 5,
    name: "Tilapia Fish",
    description: "Fresh tilapia from our aquaculture ponds",
    price: "UGX 18,000",
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Fresh",
    category: "fish",
  },
  {
    id: 6,
    name: "Goat Meat",
    description: "Premium quality goat meat, grass-fed",
    price: "UGX 35,000",
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Premium",
    category: "meat",
  },
  {
    id: 7,
    name: "Whole Chicken",
    description: "Fresh whole chicken, locally raised",
    price: "UGX 28,000",
    unit: "per bird",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Fresh",
    category: "poultry",
  },
  {
    id: 8,
    name: "Chili Powder",
    description: "Fine ground chili powder, rich flavor",
    price: "UGX 18,000",
    unit: "per 250g",
    image: "https://images.unsplash.com/photo-1599909533379-1b8c266ab676?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Processed",
    category: "processed",
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Farm Fresh Products
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Browse our selection of fresh produce, processed goods, and premium
            meats. All sustainably grown and produced at Flycorp Farms.
          </p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-primary">{product.price}</span>
                      <span className="text-xs text-muted-foreground ml-1">
                        {product.unit}
                      </span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CSA Section */}
          <div id="csa" className="mt-16">
            <Card className="bg-gradient-to-r from-primary to-farm-green-light text-primary-foreground overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="bg-secondary text-secondary-foreground mb-4">
                      CSA Program
                    </Badge>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      Community Supported Agriculture
                    </h2>
                    <p className="opacity-90 mb-6">
                      Subscribe to receive weekly boxes of fresh, seasonal produce
                      directly from our farm. Choose from three subscription tiers
                      based on your family size.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                        <p className="font-bold text-xl">Small</p>
                        <p className="text-sm opacity-80">2-3 people</p>
                        <p className="font-bold mt-2">UGX 50,000/week</p>
                      </div>
                      <div className="text-center p-4 bg-primary-foreground/10 rounded-lg border-2 border-secondary">
                        <p className="font-bold text-xl">Medium</p>
                        <p className="text-sm opacity-80">4-5 people</p>
                        <p className="font-bold mt-2">UGX 80,000/week</p>
                      </div>
                      <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                        <p className="font-bold text-xl">Large</p>
                        <p className="text-sm opacity-80">6+ people</p>
                        <p className="font-bold mt-2">UGX 120,000/week</p>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      asChild
                    >
                      <Link to="/contact">Subscribe Now</Link>
                    </Button>
                  </div>
                  <div className="text-8xl text-center">🥗</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
