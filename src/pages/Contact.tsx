import { useState } from "react";
import { Facebook, Instagram, Phone, Mail, MapPin, Copy, Check, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { BOOKING_URL, PHONE, EMAIL, ADDRESS, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";
import { BUSINESS_HOURS, CONTACT_IMAGE } from "@/lib/site-content";
import LazyImage from "@/components/LazyImage";

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message Sent",
        description: "Thanks for contacting Bogards Salon. We will follow up soon.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 900);
  };

  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Contact</p>
              <h1 className="mt-2 font-display text-4xl md:text-6xl leading-tight">Let's Plan Your Next Appointment</h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Call, email, or send a message and we will help you choose the right stylist and service for your hair goals.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book Appointment
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${PHONE}`}>Call {PHONE}</a>
                </Button>
              </div>
            </div>

            <LazyImage
              src={CONTACT_IMAGE}
              alt="Bogards salon style"
              className="h-[350px] md:h-[430px] w-full rounded-2xl object-cover"
              wrapperClassName="rounded-2xl overflow-hidden border border-border/70"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="grid xl:grid-cols-[1.05fr,1.15fr] gap-7">
            <div className="space-y-6">
              <Card className="border border-border/70">
                <CardContent className="p-6">
                  <h2 className="font-display text-3xl">Contact Information</h2>
                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <Phone size={16} className="text-primary" /> {PHONE}
                      </a>
                      <button onClick={() => copyToClipboard(PHONE, "phone")} className="text-muted-foreground hover:text-primary" aria-label="Copy phone">
                        {copied === "phone" ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <Mail size={16} className="text-primary" /> {EMAIL}
                      </a>
                      <button onClick={() => copyToClipboard(EMAIL, "email")} className="text-muted-foreground hover:text-primary" aria-label="Copy email">
                        {copied === "email" ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <p className="flex items-start gap-2 text-sm">
                        <MapPin size={16} className="text-primary mt-0.5 shrink-0" /> {ADDRESS}
                      </p>
                      <button onClick={() => copyToClipboard(ADDRESS, "address")} className="text-muted-foreground hover:text-primary" aria-label="Copy address">
                        {copied === "address" ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/70">
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl inline-flex items-center gap-2">
                    <Clock3 size={18} className="text-primary" /> Hours
                  </h3>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                    {BUSINESS_HOURS.map((entry) => (
                      <li key={entry.day} className="rounded-lg bg-secondary/70 border border-border/55 px-3 py-2 text-sm">
                        <span className="font-semibold">{entry.day}:</span> {entry.time}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-border/70">
                <iframe
                  title="Bogards Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.8!2d-77.72!3d39.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM5JzAwLjAiTiA3N8KwNDMnMTIuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </Card>

              <div className="flex gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-border/70 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-border/70 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <Card className="border border-border/70">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-display text-3xl mb-1">Send a Message</h2>
                <p className="text-sm text-muted-foreground mb-6">Use the form below and our team will contact you shortly.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(301) 555-0000"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      maxLength={1000}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
