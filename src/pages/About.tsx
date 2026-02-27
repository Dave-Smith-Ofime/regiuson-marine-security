import { motion } from "framer-motion";
import { Shield, Target, Eye, Zap, Award, Anchor, Clock, Users } from "lucide-react";
import ceoImg from "@/assets/ceo-portrait.jpg";
import mdImg from "@/assets/md-portrait.jpg";
import opsImg from "@/assets/ops-director-portrait.jpg";
import teamImg from "@/assets/security-team.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  { icon: Shield, title: "Integrity", desc: "Transparent operations and honest relationships with every client and partner." },
  { icon: Target, title: "Security", desc: "Uncompromising commitment to vessel, crew, and cargo safety at all times." },
  { icon: Eye, title: "Compliance", desc: "Strict adherence to national and international maritime regulations." },
  { icon: Zap, title: "Efficiency", desc: "Streamlined operations that minimize delays and maximize value for clients." },
  { icon: Award, title: "Reliability", desc: "Consistent, dependable service delivery backed by 15+ years of experience." },
];

const leaders = [
  {
    name: "Ralph Smith Ofime",
    role: "Managing Director",
    img: mdImg,
    bio: "Ralph brings strategic leadership and operational innovation to Regiuson Marine. With extensive experience in marine logistics and client relations, he oversees the company's growth strategy, ensuring service excellence and expanding operational capabilities across Nigerian waters."
  },
  {
    name: "Mr. Smith Ofime",
    role: "CEO & Founder",
    img: ceoImg,
    bio: "With over two decades of experience in Nigerian maritime operations, Mr. Smith Ofime founded Regiuson Marine in 2007 with a vision to deliver world-class maritime security services. His deep understanding of port operations, regulatory compliance, and security protocols has positioned the company as a trusted partner for international operators.",
    featured: true,
  },
  {
    name: "Dave Ofime-Smith",
    role: "Director of Operations",
    img: opsImg,
    bio: "Dave leads the day-to-day operational framework of Regiuson Marine, managing escort operations, security deployments, and port coordination. His meticulous approach to planning and execution ensures seamless service delivery and rapid response across all operational zones."
  },
];

const About = () => {
  return (
    <>
      <title>About Regiuson Marine - Maritime Security Leaders Since 2007</title>
      <meta name="description" content="Learn about Regiuson Marine's 15+ years of maritime security excellence in Nigerian waters. Meet our leadership team and discover our mission." />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={teamImg} alt="Maritime operations team" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-navy" />
        <div className="relative container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-6">
              Nigeria's Trusted Maritime Security Partner
            </h1>
            <p className="text-lg text-navy-foreground/70 leading-relaxed">
              Since 2007, Regiuson Marine has been at the forefront of maritime security and vessel support services, delivering operational excellence across Nigerian waters and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Our Story</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Built on Operational Strength & Integrity
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded on 9 August 2007, Regiuson Marine was established with a clear mission: to provide Nigerian and international vessel operators with maritime security and support services they could depend on — every time, without exception.
                </p>
                <p>
                  Headquartered at 33 Creek Road, Apapa, Lagos — at the heart of Nigeria's busiest port district — we operate where it matters most. Our proximity to major terminals enables rapid-response capabilities that set us apart.
                </p>
                <p>
                  Over 15 years, we have built a reputation for operational discipline, regulatory compliance, and client accountability. From armed escort operations to K9 stowaway searches, crew changes, and environmental compliance, our services cover the full spectrum of maritime operational needs.
                </p>
                <p>
                  Global operators stay with us because we deliver what others promise but cannot sustain — operational continuity, accountability, and measurable performance.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Anchor, value: "Est. 2007", label: "Year Founded" },
                { icon: Clock, value: "24/7", label: "Operations" },
                { icon: Shield, value: "500+", label: "Vessel Operations" },
                { icon: Users, value: "Zero", label: "Major Violations" },
              ].map((item) => (
                <div key={item.label} className="bg-muted rounded-xl p-6 text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-display text-2xl font-bold text-foreground">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver secure, compliant, and efficient maritime solutions that protect vessels, crews, and cargo across Nigerian waters — while maintaining the highest standards of operational integrity and environmental responsibility.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and operationally capable maritime security and vessel support company in West Africa, recognized globally for reliability, compliance excellence, and performance-driven service delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Our Values</span>
            <h2 className="font-display text-3xl font-bold text-foreground">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Leadership</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-foreground">Our Executive Team</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`text-center ${i === 1 ? "md:-mt-6" : ""}`}
              >
                <div className={`rounded-full overflow-hidden mx-auto mb-6 border-4 border-cobalt/30 ${i === 1 ? "w-56 h-56" : "w-48 h-48"}`}>
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className={`font-display font-bold text-navy-foreground ${i === 1 ? "text-2xl" : "text-xl"}`}>{leader.name}</h3>
                <div className="text-sm font-semibold text-secondary mb-4">{leader.role}</div>
                <p className="text-sm text-navy-foreground/60 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
