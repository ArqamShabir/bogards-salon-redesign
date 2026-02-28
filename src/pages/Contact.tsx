import { useState } from "react";
import { Facebook, Instagram, Phone, Mail, MapPin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { BOOKING_URL, PHONE, EMAIL, ADDRESS, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";

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
    // Simulate send
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <>
      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have a question or want to book an appointment? Reach out to us online via the contact form below, 
            give us a call, or stop by the salon!
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div className="space-y-8">
              {/* Contact Card */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-display text-xl font-semibold">Contact Information</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                        <Phone size={16} className="text-primary" /> {PHONE}
                      </a>
                      <button onClick={() => copyToClipboard(PHONE, "phone")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Copy phone">
                        {copied === "phone" ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                        <Mail size={16} className="text-primary" /> {EMAIL}
                      </a>
                      <button onClick={() => copyToClipboard(EMAIL, "email")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Copy email">
                        {copied === "email" ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="flex items-start gap-3 text-sm">
                        <MapPin size={16} className="text-primary mt-0.5 shrink-0" /> {ADDRESS}
                      </p>
                      <button onClick={() => copyToClipboard(ADDRESS, "address")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Copy address">
                        {copied === "address" ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card className="overflow-hidden">
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

              {/* Social */}
              <div>
                <h3 className="font-display text-lg font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-foreground/15 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-foreground/15 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold mb-6">Send Us a Message</h2>
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
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={sending}>
                    {sending ? "Sending..." : "Send"}
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
