import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Shield, Dog, UserCheck, Clock, Eye, Truck,
  Droplets, Fuel, Waves, Bug, Wrench, ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Armed Guard Security Escort Boats",
    desc: "Secure escort from high-risk waters to berth with trained maritime security personnel and licensed escort crafts. Our armed guard teams provide continuous protection throughout the vessel's transit, ensuring safe passage through Nigeria's territorial waters.",
    features: ["Licensed armed personnel", "Rapid-response escort vessels", "Continuous communication", "Threat assessment & mitigation"],
  },
  {
    icon: Dog,
    title: "Certified Stowaway Search with K9 Sniffer Dogs",
    desc: "Certified K9-assisted vessel inspections to prevent unauthorized boarding and ensure compliance with international maritime security standards. Our trained K9 units conduct thorough searches of all vessel compartments.",
    features: ["Certified K9 units", "Comprehensive vessel sweep", "Compliance documentation", "Post-search reporting"],
  },
  {
    icon: UserCheck,
    title: "Fast, Hassle-Free Crew Change Assistance",
    desc: "Complete immigration coordination, transport logistics, airport liaison, and documentation support for seamless crew changes. We handle every aspect of crew transition to minimize vessel downtime.",
    features: ["Immigration coordination", "Airport transfers", "Hotel accommodation", "Documentation processing"],
  },
  {
    icon: Clock,
    title: "24/7 Onboard Security",
    desc: "Dedicated onboard security teams ensuring round-the-clock vessel protection at berth and anchorage. Our personnel maintain constant vigilance with structured watch schedules and incident response protocols.",
    features: ["Round-the-clock coverage", "Structured watch schedules", "Incident response protocols", "Daily security reporting"],
  },
  {
    icon: Eye,
    title: "Protective Agent Services",
    desc: "Professional representation at Nigerian ports ensuring compliance, operational coordination, and authority liaison. Our agents protect your interests through every stage of port operations.",
    features: ["Port authority liaison", "Regulatory compliance", "Documentation handling", "Operational coordination"],
  },
  {
    icon: Truck,
    title: "Parcel & Spare Parts Delivery",
    desc: "Time-sensitive marine logistics and secure delivery operations for critical spare parts, provisions, and parcels to vessels at berth, anchorage, or offshore locations.",
    features: ["Time-critical delivery", "Secure handling", "Customs clearance", "Tracking & confirmation"],
  },
  {
    icon: Droplets,
    title: "Sludge Removal",
    desc: "Environmentally compliant sludge and waste disposal aligned with MARPOL standards. We ensure proper waste management procedures with full documentation and regulatory compliance.",
    features: ["MARPOL compliance", "Licensed disposal", "Environmental certification", "Full documentation"],
  },
  {
    icon: Fuel,
    title: "Oil Supply",
    desc: "Marine fuel and lubricant supply with quality assurance and competitive pricing. We coordinate efficient bunkering operations with verified fuel quality and accurate measurement.",
    features: ["Quality-assured fuel", "Competitive pricing", "Efficient bunkering", "Quantity verification"],
  },
  {
    icon: Waves,
    title: "Underwater Survey & Hull Inspection",
    desc: "Diver-assisted inspections and hull integrity assessments providing detailed reporting on vessel underwater condition, including propeller, rudder, and hull surface evaluation.",
    features: ["Certified divers", "Detailed reporting", "Video documentation", "Hull condition assessment"],
  },
  {
    icon: Bug,
    title: "Vessel Fumigation",
    desc: "Certified fumigation services for contamination and pest control, ensuring vessels meet international health and safety standards for safe cargo operations.",
    features: ["Certified treatments", "International compliance", "Safety protocols", "Post-fumigation clearance"],
  },
  {
    icon: Wrench,
    title: "Custom Marine Solutions",
    desc: "Tailored operational support based on vessel-specific needs. We work with operators to develop customized solutions that address unique operational challenges in Nigerian waters.",
    features: ["Needs assessment", "Custom planning", "Flexible deployment", "Performance monitoring"],
  },
];

const Services = () => {
  return (
    <>
      <title>Maritime Services - Regiuson Marine | Armed Escort, K9 Search, Crew Change</title>
      <meta name="description" content="Comprehensive maritime security and vessel support services including armed escort, K9 stowaway search, crew change, onboard security, and marine logistics in Nigeria." />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-6">
              Full-Spectrum Maritime Security & Support
            </h1>
            <p className="text-lg text-navy-foreground/70 leading-relaxed">
              From armed escort operations to environmental compliance, we deliver comprehensive marine services built on 15+ years of operational expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-cobalt transition-shadow duration-300"
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-bold text-foreground">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="h-3 w-3 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-navy-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-navy-foreground/60 mb-8 max-w-xl mx-auto">Contact our operations team to discuss your specific requirements.</p>
          <Link to="/request-quote">
            <Button variant="hero" size="xl">Request a Quote</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
