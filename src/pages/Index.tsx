import { Link } from "react-router-dom";
import { Facebook, Instagram, Clock, Scissors, Palette, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOKING_URL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";
import heroImg from "@/assets/hero-salon.jpg";
import cuttingImg from "@/assets/service-cutting.jpg";
import coloringImg from "@/assets/service-coloring.jpg";
import updoImg from "@/assets/service-updo.jpg";

const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
  { day: "Thursday", time: "9:00 AM – 7:00 PM" },
  { day: "Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const team = [
  { name: "LaDonna Wenk", title: "Owner", experience: "25 years' experience" },
  { name: "Brian Rowland", title: "Professional Hairstylist", experience: "40 years' experience" },
  { name: "Gracie Robinson", title: "Junior Stylist", experience: "1.5 years' experience" },
  { name: "Sage Rowland", title: "Professional Hairstylist", experience: "7 years' experience" },
];

const servicePreview = [
  { title: "Cutting / Styling", desc: "Precision cuts and blowouts tailored to your look.", image: cuttingImg },
  { title: "Coloring / Highlighting", desc: "Rich, vibrant color using Redken's premium formulas.", image: coloringImg },
  { title: "Styling / Up-Dos", desc: "Elegant formal styles for every occasion.", image: updoImg },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Bogards Salon interior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-4">
            Bogards Salon
          </h1>
          <p className="text-lg md:text-xl text-background/90 font-light mb-8">
            A Redken Exclusive Salon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book an Appointment
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Welcome</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bogards Salon is a Redken Exclusive salon. Redken offers you and us the most up-to-date techniques 
            and products available. We exemplify Redken's professionalism with an element of fun!
          </p>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-lg">
          <div className="text-center mb-8">
            <Clock className="mx-auto mb-3 text-primary" size={28} />
            <h2 className="font-display text-3xl font-semibold">Business Hours</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="font-medium">{h.day}</span>
                    <span className={h.time === "Closed" ? "text-primary font-medium" : "text-muted-foreground"}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                Hours may vary on holidays
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-semibold mb-6">Follow Us</h2>
          <div className="flex justify-center gap-4">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-foreground/15 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-foreground/15 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicePreview.map((s) => (
              <Card key={s.title} className="overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">Meet The Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <User size={32} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{member.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
