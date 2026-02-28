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
import CarouselSlider from "@/components/CarouselSlider";
import servicesHeroImg from "@/assets/services-hero.jpg";
import cuttingImg from "@/assets/service-cutting.jpg";
import colorImg from "@/assets/service-color.jpg";
import highlightsImg from "@/assets/service-highlights.jpg";
import coloringImg from "@/assets/service-coloring.jpg";
import permsImg from "@/assets/service-perms.jpg";
import updoImg from "@/assets/service-updo.jpg";

const pricingCategories = [
  {
    title: "Haircuts & Styling",
    items: ["Women's haircut and blow-dry", "Men's haircut", "Kids Cut (12 and under)", "Blowout", "Formal Up-do"],
  },
  {
    title: "Specialty Services",
    items: ["Balayage/Ombre", "Balayage/Ombre with Haircut", "Perm with Haircut"],
  },
  {
    title: "Color",
    items: ["Single Process", "Single Process with Haircut", "Double Process with Cut", "Corrective Color"],
  },
  {
    title: "Color Highlights",
    items: ["Full Foil with Haircut", "Partial Foil", "Partial Foil with Haircut", "Foils, Color and Haircut"],
  },
  {
    title: "Waxes",
    items: ["Brow wax", "Lip wax"],
  },
];

const policies = [
  "Guest satisfaction is our priority. We guarantee our hair services with the usage of professional products purchased from Bogards. Should any problems arise, please notify us within one (1) week of service date. We will gladly correct any concerns as refunds will not be given.",
  "In the unfortunate event that a guest arrives 15 mins or later for a salon appointment, please be aware that we cannot guarantee your services will be performed that day.",
  "No show/Cancellation: If you are unable to make it to your scheduled appointment please give us a 48 hour notice. Failure to do so will result in a charge of the scheduled appointment, that charge will need to be paid in full before scheduling your next appointment.",
  "Specialty services and packages must be reserved with a credit card and require a 48-hour cancellation notice. Cancellations less than 48 hours may be subject to a non-refundable 50% charge. 50% deposit is required for all Bridal appointments.",
  "Due to safety and guest relaxation, we ask that children have appointments when visiting the salon. Only service animals allowed.",
  "Salon products may be returned within 14 days of purchase for a retail credit. No cash refunds are given on gift certificates or retail purchases.",
  "Stylist pricings are based on a performance-based level system. Service prices vary according to level system experience.",
  "All service prices are subject to additional charges at the discretion of the service provider.",
  "We accept Visa, Mastercard, and Cash. Please be aware we have a $30 return check fee.",
  "Live streaming of our employees and/or services are against our company standards policy without permission.",
];

const serviceDescriptions = [
  {
    title: "Cutting & Styling",
    desc: "Try a new style or keep your existing shape. We offer the latest techniques in cut and design intermixed with tried and true precision.",
    image: cuttingImg,
  },
  {
    title: "Color",
    desc: "Don't go gray without a fight. Our color offers deep coverage or just the perfect blending effect. Don't have coverage issues? Then try something new. Blondes, brunettes, and redheads can all use a little shine. Also add on a gloss to make your color glow.",
    image: colorImg,
  },
  {
    title: "Highlighting",
    desc: "Whether bold or naturally lighted, highlights make flat color shine with contrast and depth. Also try a touch of low lights on extra light hair to punch the bright color.",
    image: highlightsImg,
  },
  {
    title: "Dimensional Highlighting",
    desc: "Add depth of color and creativity with more than one tone of lightness. Dimensional highlighting plays with multifaceted color and richens your overall effect of a quality foil.",
    image: coloringImg,
  },
  {
    title: "Perms",
    desc: "Curls are back and perms are an artform. The right perm adds perfect body and texture to slightly lifeless locks. Walk on the wild side with zig-zag partings to give you added movement.",
    image: permsImg,
  },
  {
    title: "Facial Waxing",
    desc: "The perfect arch is the ideal frame for the face. It can open up the eyes to accentuate your natural beauty. Also try a lip wax to enhance your mouth.",
    image: cuttingImg,
  },
  {
    title: "Styles and Up-Dos",
    desc: "Formal occasion or too busy to style? Our designers can perform almost any feat for brides or parties. Be the belle of the ball and show up your friends with a perfectly-assembled coiffe today.",
    image: updoImg,
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen max-h-[900px] min-h-[500px] flex items-center justify-center overflow-hidden">
        <LazyImage
          src={servicesHeroImg}
          alt="Hair salon tools"
          className="absolute inset-0 w-full h-full object-cover"
          wrapperClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        <div className="relative z-10 text-center px-4 animate-fade-in max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Services</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Bogards Salon is a Redken Exclusive salon located in Hagerstown, MD. Below you'll find all of our services as well as our pricing and policy information.
          </p>
          <Button asChild size="lg" className="shadow-lg">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book an Appointment
            </a>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Carousel */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Our Services</h2>
          </div>
          <CarouselSlider itemClassName="w-[320px] md:w-[400px]">
            {serviceDescriptions.map((s) => (
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
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </CarouselSlider>
        </div>
      </section>

      {/* Pricing & Policy */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl font-semibold">Pricing & Policy</h2>
            <p className="text-muted-foreground mt-2">Call for detailed pricing information</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {pricingCategories.map((cat) => (
              <Card key={cat.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-4 text-primary">{cat.title}</h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-center text-primary font-semibold mb-10">
            *PRICE VARIATION DEPENDS ON THE STYLIST PERFORMING YOUR SERVICE, AND THE THICKNESS AND LENGTH OF YOUR HAIR.
          </p>

          {/* Policy */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 text-center">Salon Policy</h3>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 md:p-8">
                <Accordion type="multiple" className="space-y-0">
                  {policies.map((p, i) => (
                    <AccordionItem key={i} value={`policy-${i}`} className="border-b last:border-0">
                      <AccordionTrigger className="text-sm text-left hover:no-underline py-3">
                        <span className="line-clamp-1 pr-4">{p.substring(0, 80)}...</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground leading-relaxed pb-2">{p}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Ready to Book?</h2>
          <p className="text-muted-foreground mb-6">Contact us today or book an appointment online</p>
          <Button asChild size="lg" className="shadow-lg">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book an Appointment
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
