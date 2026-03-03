import { Card, CardContent } from "@/components/ui/card";
import yaliLogo from "@/assets/partners/yali.jpeg";
import mastercardLogo from "@/assets/partners/mastercard.jpeg";
import edinburghLogo from "@/assets/partners/edinburgh.jpeg";
import ruforumLogo from "@/assets/partners/ruforum.jpeg";

const partners = [
  {
    id: 1,
    name: "Young African Leaders Initiative Uganda",
    logo: yaliLogo,
    description: "Youth Leadership & Development Partner",
  },
  {
    id: 2,
    name: "Mastercard Foundation",
    logo: mastercardLogo,
    description: "Financial Inclusion & Agriculture Partner",
  },
  {
    id: 3,
    name: "Edinburgh Innovations",
    logo: edinburghLogo,
    description: "Research & Innovation Partner",
  },
  {
    id: 4,
    name: "RUFORUM",
    logo: ruforumLogo,
    description: "Capacity Building in Agriculture",
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 text-center"
            >
              <CardContent className="p-8">
                <div className="w-28 h-28 mx-auto mb-4 rounded-lg flex items-center justify-center overflow-hidden bg-background">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

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
