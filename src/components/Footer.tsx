import { Facebook, Instagram, Phone, Mail, MapPin, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL, PHONE, EMAIL, ADDRESS, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top CTA Band */}
      <div className="bg-primary py-12">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            Ready for a New Look?
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-sm">
            Book your appointment today and let our stylists work their magic.
          </p>
          <Button asChild variant="hero" size="lg">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-foreground text-background">
        <div className="container py-14">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="font-display text-2xl font-bold tracking-tight inline-flex items-center gap-2">
                <Scissors size={20} className="text-primary" />
                Bogards Salon
              </Link>
              <p className="text-sm text-background/60 mt-3 leading-relaxed">
                A Redken Exclusive Salon in Hagerstown, MD. Professionalism with an element of fun.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/50">Navigation</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", to: "/" },
                  { label: "Services", to: "/services" },
                  { label: "Contact Us", to: "/contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-background/70 hover:text-background transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/50">Contact</h4>
              <div className="space-y-2.5">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2.5 text-sm text-background/70 hover:text-background transition-colors">
                  <Phone size={14} className="shrink-0" /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-sm text-background/70 hover:text-background transition-colors">
                  <Mail size={14} className="shrink-0" /> {EMAIL}
                </a>
                <p className="flex items-start gap-2.5 text-sm text-background/70">
                  <MapPin size={14} className="mt-0.5 shrink-0" /> {ADDRESS}
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/50">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10">
          <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} Bogards Salon. All rights reserved.
            </p>
            <p className="text-xs text-background/40">
              Powered by Redken
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
