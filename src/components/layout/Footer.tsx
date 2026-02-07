import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Leaf } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Our Farm", href: "/our-farm" },
    { name: "Shop", href: "/shop" },
    { name: "Tours", href: "/tours" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  policies: [
    { name: "Delivery Information", href: "/delivery" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "FAQ", href: "/faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8" />
              <div>
                <span className="font-display text-2xl font-bold">Flycorp</span>
                <span className="block text-xs font-semibold uppercase tracking-widest opacity-80">
                  Farms
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Sustainable food production, climate-smart innovations, and value addition. 
              We combine crops, livestock, and processing for a circular farming approach.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Farm Policy</h3>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 opacity-80" />
                <a
                  href="tel:+256XXXXXXXXX"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  +256 XXX XXX XXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-80" />
                <a
                  href="mailto:info@flycorpfarms.com"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  info@flycorpfarms.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-center opacity-80">
            © {new Date().getFullYear()} Flycorp Farms. Enabling Agriculture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
