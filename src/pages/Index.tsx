import { Link } from "react-router-dom";
import { ArrowRight, Clock, Facebook, Instagram, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOKING_URL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";
import {
  BUSINESS_HOURS,
  GALLERY_IMAGES,
  HOME_HERO_IMAGE,
  SERVICE_ITEMS,
  TEAM_MEMBERS,
} from "@/lib/site-content";
import LazyImage from "@/components/LazyImage";
import CarouselSlider from "@/components/CarouselSlider";

const Index = () => {
  return (
    <>
      <section className="relative min-h-[78vh] flex items-center overflow-hidden">
        <LazyImage
          src={HOME_HERO_IMAGE}
          alt="Bogards services showcase"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          wrapperClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(30,19,13,0.86),rgba(30,19,13,0.42))]" />
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl animate-fade-in">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
              Redken Exclusive Salon
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.92] text-white">
              Elevated Hair Design in Hagerstown
            </h1>
            <p className="mt-6 max-w-xl text-white/80 text-base md:text-lg">
              Modern cuts, dimensional color, polished event styling, and detail-driven service from a seasoned team.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button asChild variant="hero" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">What We Offer</p>
              <h2 className="mt-2 font-display text-3xl md:text-5xl">Signature Services</h2>
            </div>
            <Button asChild variant="outline" className="group">
              <Link to="/services">
                View Full Menu
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <CarouselSlider itemClassName="w-[300px] md:w-[360px]" autoPlay autoPlayInterval={4500}>
            {SERVICE_ITEMS.slice(0, 6).map((service) => (
              <Card key={service.title} className="overflow-hidden border border-border/70 bg-card/85 backdrop-blur">
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    wrapperClassName="h-full w-full"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-2xl">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </CarouselSlider>
        </div>
      </section>

      <section className="py-16 bg-secondary/60 border-y border-border/50">
        <div className="container">
          <div className="text-center mb-9">
            <Clock className="mx-auto mb-2 text-primary" size={26} />
            <h2 className="font-display text-3xl md:text-4xl">Business Hours</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {BUSINESS_HOURS.map((entry) => (
              <Card key={entry.day} className="border border-border/70">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-semibold">{entry.day}</p>
                  <p className={`mt-1 text-xs ${entry.time === "Closed" ? "text-primary font-bold" : "text-muted-foreground"}`}>
                    {entry.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-11">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Our Team</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">Stylists You Can Trust</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.name} className="border border-border/70 bg-card/90">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User size={28} />
                  </div>
                  <h3 className="font-display text-2xl">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground text-background">
        <div className="container">
          <div className="mb-7 flex items-end justify-between flex-wrap gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-background/60">Recent Looks</p>
              <h2 className="font-display text-3xl md:text-4xl">Style Gallery</h2>
            </div>
            <div className="flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <Facebook size={16} /> Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {GALLERY_IMAGES.map((imageUrl, index) => (
              <LazyImage
                key={imageUrl}
                src={imageUrl}
                alt={`Bogards style gallery ${index + 1}`}
                className="h-56 w-full object-cover"
                wrapperClassName="rounded-xl overflow-hidden"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
