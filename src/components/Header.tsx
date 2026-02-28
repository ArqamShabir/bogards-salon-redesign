import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL, PHONE } from "@/lib/constants";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-lg">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight"
        >
          Bogards
          <span className="block -mt-2 text-[0.68rem] md:text-xs font-sans uppercase tracking-[0.26em] text-primary">
            Hair Salon
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-3 py-2 text-xs font-semibold text-foreground/70 hover:text-primary transition-colors"
          >
            <Phone size={14} />
            {PHONE}
          </a>
          <Button asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Appointment
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t bg-background pb-4">
          <div className="container flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-sm font-medium py-1 text-foreground/70"
            >
              <Phone size={14} />
              {PHONE}
            </a>
            <Button asChild className="mt-2">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
