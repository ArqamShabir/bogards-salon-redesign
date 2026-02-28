import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BOOKING_URL, PHONE } from "@/lib/constants";
import {
  PRICING_GROUPS,
  SALON_POLICIES,
  SERVICE_ITEMS,
  SERVICES_HERO_IMAGE,
} from "@/lib/site-content";
import LazyImage from "@/components/LazyImage";

const Services = () => {
  return (
    <>
      <section className="relative min-h-[62vh] flex items-center overflow-hidden">
        <LazyImage
          src={SERVICES_HERO_IMAGE}
          alt="Bogards services"
          className="absolute inset-0 h-full w-full object-cover"
          wrapperClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(30,19,13,0.84),rgba(30,19,13,0.4))]" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-fade-in">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-white/80 font-semibold">Our Services</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-white">Built Around Your Hair Goals</h1>
            <p className="mt-5 text-white/80 max-w-xl">
              From precision cuts to dimensional color and texture, each appointment is personalized to your hair type, schedule, and finish preference.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button asChild variant="hero" size="lg">
                <a href={`tel:${PHONE}`}>Call {PHONE}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Service Menu</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">Hair, Color, Texture, and More</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {SERVICE_ITEMS.map((service) => (
              <Card key={service.title} className="overflow-hidden border border-border/70 bg-card/90">
                <div className="aspect-[16/11] overflow-hidden">
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
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
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/65 border-y border-border/55">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border border-border/70 bg-[linear-gradient(165deg,rgba(255,255,255,0.96),rgba(248,240,233,0.78))] shadow-[0_20px_45px_-30px_rgba(88,42,20,0.45)]">
              <CardContent className="p-6 md:p-7">
                <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                  <Sparkles size={12} />
                  Pricing Categories
                </p>
                <h3 className="font-display text-3xl mt-3 mb-5">Choose Your Service Path</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {PRICING_GROUPS.map((group) => (
                    <div
                      key={group.name}
                      className="rounded-2xl border border-border/70 bg-background/80 p-4 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">{group.name}</h4>
                      <ul className="mt-3 space-y-2.5">
                        {group.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex gap-2 items-start">
                            <ArrowRight size={14} className="mt-0.5 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-muted-foreground">
                  Final pricing varies by stylist level, hair density, and overall service scope.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/70 bg-background/95 shadow-[0_16px_38px_-28px_rgba(52,28,14,0.45)]">
              <CardContent className="p-6 md:p-7">
                <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                  <ShieldCheck size={12} />
                  Salon Policies
                </p>
                <h3 className="font-display text-3xl mt-3 mb-2">Know Before You Book</h3>
                <p className="text-sm text-muted-foreground mb-4">Tap each policy for details.</p>
                <Accordion type="multiple" className="space-y-2">
                  {SALON_POLICIES.map((policy, index) => (
                    <AccordionItem
                      key={policy.title}
                      value={`policy-${index}`}
                      className="rounded-xl border border-border/60 px-4 bg-secondary/40"
                    >
                      <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">
                        {policy.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                        {policy.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
