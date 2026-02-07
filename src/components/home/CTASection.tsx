import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tours CTA */}
          <div className="bg-primary-foreground/10 rounded-2xl p-8 md:p-10">
            <Calendar className="h-12 w-12 mb-6 text-secondary" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Visit Our Farm
            </h3>
            <p className="opacity-90 mb-6 leading-relaxed">
              Experience sustainable farming firsthand. Book a guided tour of our 
              demonstration farm and learn about our climate-smart agricultural practices.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Guided farm walks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Hands-on workshops
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Fresh produce tastings
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full sm:w-auto"
              asChild
            >
              <Link to="/tours">Book a Tour</Link>
            </Button>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-primary-foreground/10 rounded-2xl p-8 md:p-10">
            <Mail className="h-12 w-12 mb-6 text-secondary" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Stay Connected
            </h3>
            <p className="opacity-90 mb-6 leading-relaxed">
              Subscribe to our newsletter for farming tips, seasonal recipes, 
              product updates, and exclusive offers from Flycorp Farms.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-secondary"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs opacity-60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
