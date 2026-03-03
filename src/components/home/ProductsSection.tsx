import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Leaf } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import chiliHarvest from "@/assets/farm/chili-harvest.jpg";
import sweetPepper from "@/assets/farm/sweet-pepper.jpg";
import freshEggs from "@/assets/farm/fresh-eggs.jpg";
import greenhousePots from "@/assets/farm/greenhouse-pots.jpg";
import hotPepperSeedlings from "@/assets/farm/hot-pepper-seedlings.jpg";
import greenhouseSeedlings from "@/assets/farm/greenhouse-seedlings.jpg";

const products = [
  {
    id: 1,
    name: "Fresh Chili Peppers",
    description: "Locally grown, premium quality chili peppers",
    price: "UGX 15,000",
    unit: "per kg",
    image: chiliHarvest,
    badge: "Fresh",
    category: "vegetables",
  },
  {
    id: 2,
    name: "Dried Chili Flakes",
    description: "Sun-dried and processed chili flakes",
    price: "UGX 25,000",
    unit: "per 500g",
    image: hotPepperSeedlings,
    badge: "Processed",
    category: "processed",
  },
  {
    id: 3,
    name: "Fresh Eggs",
    description: "Free-range eggs from our healthy chickens",
    price: "UGX 12,000",
    unit: "per tray",
    image: freshEggs,
    badge: "Organic",
    category: "poultry",
  },
  {
    id: 4,
    name: "Sweet Peppers",
    description: "Colorful bell peppers from our greenhouse",
    price: "UGX 20,000",
    unit: "per kg",
    image: sweetPepper,
    badge: "Fresh",
    category: "vegetables",
  },
  {
    id: 5,
    name: "Greenhouse Vegetables",
    description: "Fresh vegetables from our controlled environment",
    price: "UGX 18,000",
    unit: "per kg",
    image: greenhouseSeedlings,
    badge: "Fresh",
    category: "vegetables",
  },
  {
    id: 6,
    name: "Seedling Packs",
    description: "Ready-to-plant seedlings for your garden",
    price: "UGX 35,000",
    unit: "per pack",
    image: greenhousePots,
    badge: "Premium",
    category: "vegetables",
  },
];

export function ProductsSection() {
  const { addItem } = useCart();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
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
                    onClick={() => addItem(product)}
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
            <div className="p-6 bg-primary-foreground/10 rounded-xl">
              <Leaf className="h-16 w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
