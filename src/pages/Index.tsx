import { Link } from "react-router-dom";
import { Facebook, Instagram, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOKING_URL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";
import LazyImage from "@/components/LazyImage";
import CarouselSlider from "@/components/CarouselSlider";
import heroImg from "@/assets/hero-salon.jpg";
import cuttingImg from "@/assets/service-cutting.jpg";
import coloringImg from "@/assets/service-coloring.jpg";
import updoImg from "@/assets/service-updo.jpg";
import permsImg from "@/assets/service-perms.jpg";
import colorImg from "@/assets/service-color.jpg";
import highlightsImg from "@/assets/service-highlights.jpg";

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
  { name: "LaDonna Wenk", title: "Owner", experience: "25 years" },
  { name: "Brian Rowland", title: "Professional Hairstylist", experience: "40 years" },
  { name: "Gracie Robinson", title: "Junior Stylist", experience: "1.5 years" },
  { name: "Sage Rowland", title: "Professional Hairstylist", experience: "7 years" },
];

const servicePreview = [
  { title: "Cutting & Styling", desc: "Try a new style or keep your existing shape. We offer the latest techniques in cut and design.", image: cuttingImg },
  { title: "Color", desc: "Deep coverage or the perfect blending effect. Add a gloss to make your color glow.", image: colorImg },
  { title: "Highlighting", desc: "Bold or naturally lighted, highlights make flat color shine with contrast and depth.", image: highlightsImg },
  { title: "Dimensional Highlighting", desc: "Multi-tonal highlights that create movement and visual interest throughout your hair.", image: coloringImg },
  { title: "Perms", desc: "The right perm adds perfect body and texture to slightly lifeless locks.", image: permsImg },
  { title: "Styles & Up-Dos", desc: "Our designers can perform almost any feat for brides or parties.", image: updoImg },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen max-h-[900px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <LazyImage
          src={heroImg}
          alt="Bogards Salon interior"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          wrapperClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        <div className="relative z-10 text-center px-4 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-white tracking-widest uppercase">A Redken Exclusive Salon</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            Bogards Salon
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-lg mx-auto">
            Where professionalism meets an element of fun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book an Appointment
              </a>
            </Button>
            <Button asChild variant="hero" size="lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container max-w-3xl text-center">
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Welcome to Bogards</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bogards Salon is a Redken Exclusive salon. Redken offers you and us the most up-to-date techniques 
            and products available. We exemplify Redken's professionalism with an element of fun!
          </p>
        </div>
      </section>

      {/* Hours - Full Width */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-10">
            <Clock className="mx-auto mb-3 text-primary" size={28} />
            <h2 className="font-display text-3xl font-semibold">Business Hours</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {hours.map((h) => (
              <Card key={h.day} className={`border-0 shadow-sm text-center ${h.time === "Closed" ? "bg-muted" : "bg-card"}`}>
                <CardContent className="p-5">
                  <p className="font-semibold text-sm mb-1">{h.day}</p>
                  <p className={`text-sm ${h.time === "Closed" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                    {h.time === "Closed" ? "Closed" : h.time.replace(" – ", "\n–\n").split("\n").map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-5 text-center italic">Hours may vary on holidays</p>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Our Services</h2>
            <p className="text-muted-foreground mt-3">Expert hair care tailored to you</p>
          </div>
          <CarouselSlider itemClassName="w-[320px] md:w-[380px]">
            {servicePreview.map((s) => (
              <Card key={s.title} className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    wrapperClassName="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </CarouselSlider>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/services">
                View All Services
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet The Team - Horizontal Slider */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Meet The Team</h2>
            <p className="text-muted-foreground mt-3">Our talented stylists are here for you</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center mx-auto mb-4">
                    <User size={32} className="text-primary/60" />
                  </div>
                  <h3 className="font-display text-base md:text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{member.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us - right above footer */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h2 className="font-display text-2xl font-semibold mb-2">Follow Us</h2>
          <p className="text-muted-foreground text-sm mb-6">Stay up to date with our latest styles</p>
          <div className="flex justify-center gap-4">
            {[
              { href: FACEBOOK_URL, icon: Facebook, label: "Facebook" },
              { href: INSTAGRAM_URL, icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-full border-2 border-foreground/10 hover:border-primary hover:bg-primary/5 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={20} className="group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
