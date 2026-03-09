import { motion } from "framer-motion";
import { MapPin, Ship, Shield, Clock, Users, Radio, Anchor, Award } from "lucide-react";

const ports = [
  "Lagos Ports (Apapa & Tin Can Island), Nigeria",
  "Port Harcourt, Nigeria",
  "Warri, Nigeria",
  "Calabar, Nigeria",
  "Offshore terminals within Nigerian territorial waters",
  "Tema, Ghana",
  "Takoradi, Ghana",
  "Abidjan, Côte d'Ivoire",
  "San Pedro, Côte d'Ivoire",
  "Lomé, Togo",
  "Cotonou, Benin",
  "Dakar, Senegal",
  "Conakry, Guinea",
  "Freetown, Sierra Leone",
  "Monrovia, Liberia",
  "Douala, Cameroon",
  "Kribi, Cameroon",
  "Malabo, Equatorial Guinea",
  "Bata, Equatorial Guinea",
  "Libreville, Gabon",
  "Port-Gentil, Gabon",
  "Pointe-Noire, Republic of Congo",
  "Nouakchott, Mauritania",
  "Praia, Cape Verde",
  "Banjul, The Gambia",
  "Bissau, Guinea-Bissau",
];

const strengths = [
  { icon: Radio, label: "24/7 Operations Control Center" },
  { icon: Ship, label: "Rapid-response escort boats" },
  { icon: Users, label: "Trained maritime security personnel" },
  { icon: Shield, label: "Certified K9 units" },
  { icon: Anchor, label: "Experienced port operations coordinators" },
  { icon: Award, label: "Established partnerships with port authorities" },
  { icon: Clock, label: "Strict compliance and reporting procedures" },
  { icon: Ship, label: "Proven multi-vessel coordination capability" },
];

const industries = [
  { title: "Oil & Gas", desc: "Security and logistics support for offshore and onshore oil & gas operations." },
  { title: "Tankers", desc: "Armed escort and onboard security for tanker vessels in Nigerian waters." },
  { title: "Container Shipping", desc: "Port coordination and security services for container vessel operations." },
  { title: "Bulk Carriers", desc: "Comprehensive support for bulk carrier arrivals and departures." },
  { title: "Offshore Support Vessels", desc: "Dedicated services for offshore supply and support vessel operations." },
];

const Operations = () => {
  return (
    <>
      <title>Operations & Coverage - Regiuson Marine | Nigerian Maritime Operations</title>
      <meta name="description" content="Regiuson Marine operates across all major Nigerian ports including Lagos, Port Harcourt, Warri, and Calabar with 24/7 operations capability." />

      <section className="pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Operations</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-6">
              Operational Coverage & Strength
            </h1>
            <p className="text-lg text-navy-foreground/70">
              Strategically positioned across Nigeria's major ports and offshore terminals with 24/7 operational capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Coverage Area</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Operational Ports</h2>
              <div className="space-y-4">
                {ports.map((port) => (
                  <div key={port} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{port}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Capabilities</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Operational Strength</h2>
              <div className="grid grid-cols-1 gap-3">
                {strengths.map((s) => (
                  <div key={s.label} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <s.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Industries Served</span>
            <h2 className="font-display text-3xl font-bold text-navy-foreground">Sectors We Support</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-xl p-6 text-center">
                <h3 className="font-display font-semibold text-navy-foreground mb-2">{ind.title}</h3>
                <p className="text-xs text-navy-foreground/50">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Operations;
