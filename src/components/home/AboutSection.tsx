import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Farm landscape"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Greenhouse"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fresh produce"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-secondary p-6 text-secondary-foreground">
                <p className="font-display text-2xl font-bold">5+ Years</p>
                <p className="text-sm opacity-90">Of Sustainable Farming</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Sustainable Food Production
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Flycorp Farms is an integrated agribusiness focused on sustainable food 
              production, climate-smart innovations, and value addition. We combine 
              crops, livestock, and processing for a truly circular farming approach.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is to transform agriculture in East Africa by demonstrating 
              that sustainable farming practices can be profitable while protecting 
              our environment for future generations.
            </p>

            {/* Sustainability Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">♻️</span>
                <span className="text-sm font-medium">Circular Farming</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌱</span>
                <span className="text-sm font-medium">Organic Methods</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">☀️</span>
                <span className="text-sm font-medium">Solar Powered</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💧</span>
                <span className="text-sm font-medium">Water Conservation</span>
              </div>
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              asChild
            >
              <Link to="/our-farm">
                Read Our Full Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
