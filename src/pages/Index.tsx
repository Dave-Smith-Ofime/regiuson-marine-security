import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Shield, Ship, Anchor, Clock, Users, Award, ChevronRight,
  Target, Eye, Truck, Dog, UserCheck, Droplets, Fuel, Waves, Bug
} from "lucide-react";
import heroImg from "@/assets/hero-escort.jpg";
import teamImg from "@/assets/security-team.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const }
  }),
};

const stats = [
  { value: "15+", label: "Years of Operations" },
  { value: "500+", label: "Vessel Operations" },
  { value: "24/7", label: "Operations Center" },
  { value: "Zero", label: "Major Violations" },
];

const services = [
  { icon: Shield, title: "Armed Guard Escort Boats", desc: "Secure escort from high-risk waters to berth with trained maritime security personnel." },
  { icon: Dog, title: "K9 Stowaway Search", desc: "Certified K9-assisted vessel inspections to prevent unauthorized boarding." },
  { icon: UserCheck, title: "Crew Change Assistance", desc: "Immigration coordination, transport logistics, and documentation support." },
  { icon: Clock, title: "24/7 Onboard Security", desc: "Dedicated onboard security teams for round-the-clock vessel protection." },
  { icon: Eye, title: "Protective Agent Services", desc: "Representation at Nigerian ports ensuring compliance and coordination." },
  { icon: Truck, title: "Parcel & Spare Parts Delivery", desc: "Time-sensitive marine logistics and secure delivery operations." },
  { icon: Droplets, title: "Sludge Removal", desc: "Environmentally compliant waste disposal aligned with MARPOL standards." },
  { icon: Fuel, title: "Oil Supply", desc: "Marine fuel and lubricant supply with quality assurance." },
  { icon: Waves, title: "Underwater Survey", desc: "Diver-assisted inspections and hull integrity assessments." },
  { icon: Bug, title: "Vessel Fumigation", desc: "Certified fumigation services for contamination and pest control." },
];

const testimonials = [
  {
    quote: "Regiuson Marine has been our trusted partner for over five years. Their operational discipline and security protocols are unmatched in Nigerian waters.",
    author: "Operations Director",
    company: "International Shipping Corporation"
  },
  {
    quote: "Their 24/7 response capability and professional crew change coordination have saved us countless hours and ensured zero disruptions to our schedules.",
    author: "Fleet Manager",
    company: "Global Tanker Operations"
  },
  {
    quote: "We switched to Regiuson for armed escort services and haven't looked back. Professional, compliant, and always dependable.",
    author: "Security Manager",
    company: "European Bulk Carrier Line"
  },
];

const Index = () => {
  return (
    <>
      {/* SEO */}
      <title>Regiuson Marine - Maritime Security & Vessel Support Services in Nigeria</title>
      <meta name="description" content="Regiuson Marine delivers secure, compliant maritime operations across Nigerian waters. Armed escort, crew change, K9 search, and 24/7 vessel security since 2007." />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Maritime escort operations in Nigerian waters" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-secondary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Since 2007
              </span>
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight mb-6"
            >
              Securing Maritime Operations Across Nigerian Waters
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-navy-foreground/70 mb-10 max-w-2xl leading-relaxed"
            >
              Trusted by international operators for armed escort, vessel security, crew coordination, and full-spectrum marine services across high-risk waters and Nigerian ports.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/request-quote">
                <Button variant="hero" size="xl">Request a Quote</Button>
              </Link>
              <a href="tel:+2348169703636">
                <Button variant="heroOutline" size="xl">Contact 24/7 Operations</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-20 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 bg-navy rounded-xl overflow-hidden shadow-navy">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 md:p-8 text-center border-r border-navy-foreground/5 last:border-r-0"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-sm text-navy-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Our Capabilities</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Maritime Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From armed escort operations to environmental compliance, we provide end-to-end maritime security and vessel support services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card p-6 rounded-xl border border-border hover:border-cobalt/30 hover:shadow-cobalt transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="cobalt" size="lg">
                View All Services <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={teamImg} alt="Regiuson Marine security team" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-navy/80" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-foreground mb-6">
                Operational Excellence, Proven Results
              </h2>
              <p className="text-navy-foreground/70 leading-relaxed mb-8">
                Global operators stay with us because we deliver what others promise but cannot sustain — operational continuity, accountability, and measurable performance. Since 2007, we have supported operations with zero major compliance violations and an industry-leading response time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Licensed & Compliant" },
                  { icon: Clock, label: "24/7 Operations" },
                  { icon: Users, label: "Trained Personnel" },
                  { icon: Award, label: "Zero Violations" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-navy-foreground/80">
                    <item.icon className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {[
                { title: "NIMASA Compliant", desc: "Full compliance with Nigerian Maritime Administration and Safety Agency regulations." },
                { title: "Armed Escort Licensed", desc: "Licensed armed escort operations with certified maritime security personnel." },
                { title: "Environmental Standards", desc: "MARPOL-aligned waste management and environmental compliance protocols." },
                { title: "Full Insurance Coverage", desc: "Comprehensive marine operations insurance for all service engagements." },
              ].map((item, i) => (
                <div key={item.title} className="bg-navy-foreground/5 backdrop-blur-sm rounded-lg p-5 border border-navy-foreground/10">
                  <h4 className="font-display font-semibold text-navy-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-navy-foreground/60">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Trusted by International Operators
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="text-4xl text-secondary/30 font-serif mb-4">"</div>
                <p className="text-muted-foreground leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <div className="font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
              Ready to Secure Your Operations?
            </h2>
            <p className="text-navy-foreground/60 mb-8 max-w-xl mx-auto">
              Get in touch with our 24/7 operations team for immediate assistance or request a customized service quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button variant="hero" size="xl">Request a Quote</Button>
              </Link>
              <a href="tel:+2348169703636">
                <Button variant="heroOutline" size="xl">Call Now: +234 816 970 3636</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
