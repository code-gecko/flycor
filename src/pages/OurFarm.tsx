import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const values = [
  {
    icon: "🌱",
    title: "Sustainability",
    description: "We practice circular farming that minimizes waste and regenerates our land for future generations.",
  },
  {
    icon: "🔬",
    title: "Innovation",
    description: "We embrace climate-smart technologies and continuously experiment with new farming methods.",
  },
  {
    icon: "🤝",
    title: "Community",
    description: "We believe in sharing knowledge and building partnerships to strengthen local food systems.",
  },
  {
    icon: "✨",
    title: "Quality",
    description: "We maintain the highest standards in everything we grow, process, and deliver to our customers.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Flycorp Farms was established with a vision to transform agriculture through sustainable practices.",
  },
  {
    year: "2021",
    title: "First Harvest",
    description: "Our first successful harvest of chili peppers and vegetables, setting the foundation for our product line.",
  },
  {
    year: "2022",
    title: "Livestock Integration",
    description: "Introduced goats, chickens, and fish farming to create a truly circular farming system.",
  },
  {
    year: "2023",
    title: "Processing Facility",
    description: "Opened our value-addition facility for drying, processing, and packaging farm products.",
  },
  {
    year: "2024",
    title: "Training Center",
    description: "Launched our agricultural training and consultancy services to empower other farmers.",
  },
  {
    year: "2025",
    title: "Hydroponics Expansion",
    description: "Expanded our greenhouse and hydroponic systems, and began offering installation services.",
  },
];

const OurFarm = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Farm Story
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              A journey of sustainable farming, innovation, and community.
              Learn about our mission to transform agriculture in East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Enabling Agriculture, Sustainably
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Flycorp Farms is an integrated agribusiness committed to demonstrating 
                that sustainable farming can be both profitable and environmentally 
                responsible. We combine traditional knowledge with modern innovation 
                to create food systems that work for people and planet.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Through our demonstration farm, training programs, and partnerships, 
                we're working to inspire and equip a new generation of climate-smart 
                farmers across East Africa.
              </p>
              <div className="space-y-3">
                {[
                  "Climate-smart agricultural practices",
                  "Circular farming with zero waste",
                  "Knowledge sharing and farmer training",
                  "High-quality, sustainably produced food",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Greenhouse farming"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fresh vegetables"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <span className="text-5xl mb-4 block">{value.icon}</span>
                  <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Farm Timeline
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Experience Our Farm Firsthand
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Book a tour to see our sustainable farming practices in action and 
            learn how we're transforming agriculture in East Africa.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            asChild
          >
            <Link to="/tours">
              Book a Farm Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default OurFarm;
