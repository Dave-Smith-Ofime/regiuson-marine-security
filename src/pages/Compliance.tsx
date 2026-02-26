import { motion } from "framer-motion";
import { Shield, FileCheck, AlertTriangle, Lock, Anchor, Award } from "lucide-react";

const certifications = [
  { icon: Anchor, title: "Nigerian Maritime Regulatory Approvals", desc: "Full operational approval under Nigerian maritime laws and regulations governing vessel operations and port services." },
  { icon: Shield, title: "NIMASA Compliance", desc: "Compliant with all Nigerian Maritime Administration and Safety Agency requirements for maritime security and vessel support operations." },
  { icon: FileCheck, title: "Licensed Armed Escort Permissions", desc: "Licensed to conduct armed escort operations within Nigerian territorial waters, with all personnel properly certified and documented." },
  { icon: AlertTriangle, title: "Environmental & Waste Management Compliance", desc: "Full compliance with MARPOL and Nigerian environmental standards for waste disposal, sludge removal, and environmental protection." },
  { icon: Award, title: "Maritime Safety & Operational Certifications", desc: "Comprehensive safety certifications covering operational procedures, personnel training, and emergency response protocols." },
  { icon: Lock, title: "Full Insurance Coverage", desc: "Comprehensive marine operations insurance covering all aspects of our service delivery, providing complete liability protection for our clients." },
];

const protocols = [
  { title: "Safety Protocols", items: ["Pre-operation risk assessment for every deployment", "Structured safety briefings for all personnel", "Real-time communication and monitoring systems", "Emergency response and escalation procedures", "Incident reporting and investigation framework"] },
  { title: "Documentation Processes", items: ["Complete operation records and audit trails", "Regulatory compliance documentation", "Safety inspection certificates", "Personnel certification tracking", "Client reporting and performance metrics"] },
  { title: "Risk Management Systems", items: ["Threat assessment and intelligence gathering", "Operational risk scoring methodology", "Continuous monitoring and early warning systems", "Contingency planning for high-risk scenarios", "Post-operation debriefing and lessons learned"] },
];

const Compliance = () => {
  return (
    <>
      <title>Compliance & Certifications - Regiuson Marine | NIMASA Compliant</title>
      <meta name="description" content="Regiuson Marine operates under full Nigerian maritime regulatory approvals, NIMASA compliance, and environmental standards with zero major violations." />

      <section className="pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Compliance</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-6">
              Certifications & Compliance
            </h1>
            <p className="text-lg text-navy-foreground/70">
              Our commitment to regulatory compliance and operational safety is the foundation of every service we deliver.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={cert.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">Safety & Risk Management</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {protocols.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Shield className="h-3 w-3 text-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Compliance;
