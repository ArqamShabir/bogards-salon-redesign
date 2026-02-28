import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL, PHONE, EMAIL, ADDRESS, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Keep in Touch */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Keep in Touch</h3>
            <div className="flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-background/80">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone size={16} /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail size={16} /> {EMAIL}
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" /> {ADDRESS}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-display text-xl font-semibold">Ready for a New Look?</h3>
            <Button asChild variant="secondary" size="lg">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Bogards Salon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
