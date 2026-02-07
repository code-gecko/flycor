import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground text-sm font-semibold rounded-full mb-6 animate-fade-in">
            🌱 Sustainable Farming Since 2020
          </span>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            FLYCORP FARMS
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Integrated Agribusiness focused on sustainable food production, 
            climate-smart innovations, and value addition. We combine crops, 
            livestock, and processing for a circular farming approach.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 group"
              asChild
            >
              <Link to="/shop">
                Shop Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 group"
              asChild
            >
              <Link to="/tours">
                <Play className="mr-2 h-5 w-5" />
                Book a Tour
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold">50+</p>
              <p className="text-sm opacity-80">Acres Farmed</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold">1000+</p>
              <p className="text-sm opacity-80">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold">15+</p>
              <p className="text-sm opacity-80">Product Types</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
