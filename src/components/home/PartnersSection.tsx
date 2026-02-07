import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "🏢",
    description: "Agricultural Development Partner",
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "🌍",
    description: "Sustainability Initiative Partner",
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "🏛️",
    description: "Government Agriculture Agency",
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "🎓",
    description: "Agricultural Research Institute",
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Working Together
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Partners
          </h2>
          <p className="text-muted-foreground text-lg">
            We're grateful for the support of our partners who share our vision 
            of sustainable agriculture and food security.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <Card 
              key={partner.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 text-center"
            >
              <CardContent className="p-8">
                {/* Placeholder Logo */}
                <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center text-4xl border-2 border-dashed border-border group-hover:border-primary/30 transition-colors">
                  {partner.logo}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
                {/* Edit hint */}
                <p className="text-xs text-primary/60 mt-4 italic">
                  Click to edit partner details
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-2xl">🙏</span>
            <p className="text-primary font-medium">
              Thank you to all our partners for their continued support!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
