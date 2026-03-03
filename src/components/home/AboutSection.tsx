import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Sprout, Sun, Droplets } from "lucide-react";
import greenhousePots from "@/assets/farm/greenhouse-pots.jpg";
import greenhouseSeedlings from "@/assets/farm/greenhouse-seedlings.jpg";
import pepperPlants from "@/assets/farm/pepper-plants.jpg";

const highlights = [
  { icon: Recycle, label: "Circular Farming" },
  { icon: Sprout, label: "Organic Methods" },
  { icon: Sun, label: "Solar Powered" },
  { icon: Droplets, label: "Water Conservation" },
];

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
                  src={greenhousePots}
                  alt="Greenhouse pots at the farm"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={greenhouseSeedlings}
                  alt="Greenhouse seedlings"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={pepperPlants}
                  alt="Pepper plants growing"
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
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{h.label}</span>
                </div>
              ))}
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
