import { Link } from "react-router-dom";
import { Sprout, Fish, Factory, Lightbulb, GraduationCap, Warehouse } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sprout,
    title: "Crop Production",
    description: "Climate-smart and protected agriculture for consistent, quality yields.",
    items: ["Chili (fresh, dried & processed)", "Sweet peppers", "Greenhouse vegetables"],
    color: "text-farm-green",
  },
  {
    icon: Fish,
    title: "Livestock & Aquaculture",
    description: "Integrated systems for efficient, circular farming.",
    items: ["Pigs and Goats", "Chickens (local & broilers)", "Fish farming"],
    color: "text-secondary",
  },
  {
    icon: Factory,
    title: "Value Addition",
    description: "Processing to reduce losses and increase incomes.",
    items: ["Solar drying systems", "Primary processing & packaging", "Export quality standards"],
    color: "text-farm-gold",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Sustainable solutions for resilient farming.",
    items: ["Black Soldier Fly production", "Azolla cultivation", "Organic waste recycling"],
    color: "text-primary",
  },
  {
    icon: Warehouse,
    title: "Hydroponics Setup",
    description: "Complete greenhouse and hydroponic system installation.",
    items: ["System design & planning", "Equipment installation", "Ongoing technical support"],
    color: "text-farm-green-light",
  },
  {
    icon: GraduationCap,
    title: "Training & Consultancy",
    description: "Empowering farmers with knowledge and skills.",
    items: ["Hands-on workshops", "Farm management training", "Agricultural consulting"],
    color: "text-farm-brown",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From sustainable farming practices to training and consultancy, 
            we offer comprehensive agricultural solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card"
            >
              <CardHeader>
                <div className={`p-3 rounded-lg bg-muted w-fit mb-4 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Learn more about our services
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
