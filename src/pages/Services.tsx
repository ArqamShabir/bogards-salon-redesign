import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BOOKING_URL } from "@/lib/constants";
import LazyImage from "@/components/LazyImage";
import servicesHeroImg from "@/assets/services-hero.jpg";
import { Scissors, Palette, Sparkles, Wind, Waves, Heart, Star } from "lucide-react";

const pricingCategories = [
  {
    title: "Haircuts & Styling",
    items: ["Women's haircut and blow-dry", "Men's haircut", "Kids Cut", "Blowout", "Formal Up-do"],
  },
  {
    title: "Color",
    items: ["Single Process", "Single Process with Haircut", "Double Process with Cut", "Corrective Color"],
  },
  {
    title: "Highlights",
    items: ["Full Foil with Haircut", "Partial Foil", "Partial Foil with Haircut", "Foils, Color and Haircut"],
  },
  {
    title: "Waxes",
    items: ["Brow wax", "Lip wax"],
  },
];

const policies = [
  "Please arrive 5–10 minutes early for your appointment.",
  "Cancellations require at least 24-hour notice.",
  "We reserve the right to charge for no-shows or late cancellations.",
  "Prices may vary depending on hair length, thickness, and desired result.",
  "A consultation is recommended for color correction services.",
  "All services are by appointment only. Walk-ins are welcome based on availability.",
];

const serviceDescriptions = [
  { icon: Scissors, title: "Cutting & Styling", desc: "From classic cuts to modern trends, our stylists create the perfect shape for your face and lifestyle." },
  { icon: Palette, title: "Color", desc: "Whether you want a subtle change or a bold transformation, we use Redken's premium color line for beautiful, lasting results." },
  { icon: Sparkles, title: "Highlighting", desc: "Add depth and dimension with our expert highlighting techniques, from natural sun-kissed looks to dramatic contrasts." },
  { icon: Wind, title: "Dimensional Highlighting", desc: "Multi-tonal highlights that create movement and visual interest throughout your hair." },
  { icon: Waves, title: "Perms", desc: "Modern perms that add body, volume, and natural-looking waves or curls." },
  { icon: Heart, title: "Facial Waxing", desc: "Quick, precise facial waxing services for brows and lips." },
  { icon: Star, title: "Styles and Up-Dos", desc: "Elegant updos and formal styles perfect for weddings, proms, and special occasions." },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <LazyImage
          src={servicesHeroImg}
          alt="Hair salon tools"
          className="absolute inset-0 w-full h-full object-cover"
          wrapperClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Services</h1>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Below you'll find our services and pricing/policy. Call for detailed pricing information.
          </p>
          <Button asChild size="lg" className="shadow-lg">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book an Appointment
            </a>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Pricing & Policy */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl font-semibold">Pricing & Services</h2>
            <p className="text-muted-foreground mt-2 text-sm">Call us for detailed pricing information</p>
          </div>
          <Accordion type="multiple" className="space-y-3">
            {pricingCategories.map((cat) => (
              <AccordionItem key={cat.title} value={cat.title} className="border rounded-lg px-5 shadow-sm bg-card">
                <AccordionTrigger className="text-base font-semibold font-display hover:no-underline">
                  {cat.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2.5 pb-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Policy */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold mb-6">Salon Policy</h3>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 md:p-8">
                <ul className="space-y-4">
                  {policies.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Descriptions */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl font-semibold">What We Offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDescriptions.map((s) => (
              <Card key={s.title} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
