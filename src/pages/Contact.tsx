import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll respond within 24 hours.");
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";
  const labelClass = "block text-sm font-semibold text-foreground mb-1.5";

  return (
    <>
      <title>Contact Regiuson Marine - 24/7 Maritime Operations Support</title>
      <meta name="description" content="Contact Regiuson Marine for maritime security, vessel support, and emergency operations. 24/7 emergency line: +234 816 970 3636." />

      <section className="pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-navy-foreground/70">Our operations team is available 24/7 for emergency support and service inquiries.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Registered Office</h3>
                    <p className="text-sm text-muted-foreground">33, Creek Road, Apapa, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone & 24/7 Emergency</h3>
                    <a href="tel:+2348169703636" className="text-sm text-muted-foreground block hover:text-foreground">+234 816 970 3636</a>
                    <a href="tel:+2348102411100" className="text-sm text-muted-foreground block hover:text-foreground">+234 810 241 1100</a>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:regiusonmarineservices@yahoo.com" className="text-sm text-muted-foreground block hover:text-foreground break-all">regiusonmarineservices@yahoo.com</a>
                    <a href="mailto:ofimesmith@gmail.com" className="text-sm text-muted-foreground block hover:text-foreground">ofimesmith@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Operations Hours</h3>
                    <p className="text-sm text-muted-foreground">24/7 — Emergency support available around the clock</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="tel:+2348169703636" className="flex-1">
                  <Button variant="hero" size="lg" className="w-full">
                    <Phone className="h-4 w-4" /> Emergency Call
                  </Button>
                </a>
                <a href={`https://wa.me/2348169703636?text=${encodeURIComponent("Hello, I would like to inquire about your maritime services.")}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="cobalt" size="lg" className="w-full">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} className={inputClass} required maxLength={100} />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} required maxLength={255} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} maxLength={20} />
                  </div>
                  <div>
                    <label className={labelClass}>Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className={inputClass} required>
                      <option value="">Select subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Service Quote</option>
                      <option value="emergency">Emergency Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} className={`${inputClass} min-h-[160px] resize-y`} required maxLength={1000} />
                </div>
                <Button type="submit" variant="navy" size="xl">Send Message</Button>
              </form>

              {/* Map */}
              <div className="mt-10 rounded-xl overflow-hidden border border-border h-[300px]">
                <iframe
                  title="Regiuson Marine Office Location - Apapa, Lagos"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.38!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sApapa%2C+Lagos!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
