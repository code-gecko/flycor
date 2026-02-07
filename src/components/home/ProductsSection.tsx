import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

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
];

export function ProductsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Farm Fresh
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              Our Products
            </h2>
            <p className="text-muted-foreground text-lg mt-2 max-w-xl">
              Premium quality produce from our sustainable farm. All products are 
              grown and processed using climate-smart methods.
            </p>
          </div>
          <Button
            variant="outline"
            className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CSA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-farm-green-light rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Join Our CSA Program
              </h3>
              <p className="opacity-90 mb-6">
                Subscribe to our Community Supported Agriculture program and receive 
                weekly boxes of fresh, seasonal produce directly from our farm.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                asChild
              >
                <Link to="/shop#csa">Learn More About CSA</Link>
              </Button>
            </div>
            <div className="text-6xl">🥬</div>
          </div>
        </div>
      </div>
    </section>
  );
}
