import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const vesselTypes = ["Tanker", "Container Ship", "Bulk Carrier", "Offshore Support Vessel", "General Cargo", "Other"];
const portOptions = [
  "Apapa, Lagos", "Tin Can Island, Lagos", "Port Harcourt", "Warri", "Calabar", "Offshore Terminal",
  "Tema, Ghana", "Takoradi, Ghana", "Abidjan, Côte d'Ivoire", "Lomé, Togo", "Cotonou, Benin",
  "Dakar, Senegal", "Conakry, Guinea", "Freetown, Sierra Leone", "Monrovia, Liberia",
  "Douala, Cameroon", "Libreville, Gabon", "Pointe-Noire, Congo", "Other"
];
const serviceOptions = [
  "Armed Guard Escort", "K9 Stowaway Search", "Crew Change Assistance", "24/7 Onboard Security",
  "Protective Agent Services", "Parcel & Spare Parts Delivery", "Sludge Removal", "Oil Supply",
  "Underwater Survey", "Vessel Fumigation", "Custom Solution"
];
const urgencyLevels = ["Routine", "Urgent (Within 48 hours)", "Emergency (Within 24 hours)"];

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    vesselName: "", vesselType: "", eta: "", port: "",
    customPort: "", service: "", urgency: "", contactName: "", contactEmail: "",
    contactPhone: "", company: "", notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const subject = `Quote Request: ${formData.service} - ${formData.vesselName}`;
      const body = `
QUOTE REQUEST - REGIUSON MARINE

Vessel Details:
- Vessel Name: ${formData.vesselName}
- Vessel Type: ${formData.vesselType}
- ETA: ${formData.eta}
- Port: ${formData.port === "Other" ? formData.customPort : formData.port}
- Required Service: ${formData.service}
- Urgency: ${formData.urgency}

Contact Information:
- Name: ${formData.contactName}
- Company: ${formData.company || "N/A"}
- Email: ${formData.contactEmail}
- Phone: ${formData.contactPhone}

Additional Notes:
${formData.notes || "None"}
      `.trim();

      const mailtoLink = `mailto:regiusonmarineservices@yahoo.com,ofimesmith@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      toast.success("Opening your email client to send the quote request.");
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";
  const labelClass = "block text-sm font-semibold text-foreground mb-1.5";

  return (
    <>
      <title>Request a Quote - Regiuson Marine | Maritime Services Quote</title>
      <meta name="description" content="Request a customized quote for maritime security, armed escort, crew change, or any vessel support service from Regiuson Marine." />

      <section className="pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Get Started</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-foreground mb-4">Request a Quote</h1>
            <p className="text-lg text-navy-foreground/70">Complete the form below and our operations team will respond within 2 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Vessel Name *</label>
                <input name="vesselName" value={formData.vesselName} onChange={handleChange} className={inputClass} required maxLength={100} />
              </div>
              <div>
                <label className={labelClass}>Vessel Type *</label>
                <select name="vesselType" value={formData.vesselType} onChange={handleChange} className={inputClass} required>
                  <option value="">Select type</option>
                  {vesselTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>ETA *</label>
                <input type="date" name="eta" value={formData.eta} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Port *</label>
                <select name="port" value={formData.port} onChange={handleChange} className={inputClass} required>
                  <option value="">Select port</option>
                  {portOptions.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Required Service *</label>
                <select name="service" value={formData.service} onChange={handleChange} className={inputClass} required>
                  <option value="">Select service</option>
                  {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Urgency Level *</label>
                <select name="urgency" value={formData.urgency} onChange={handleChange} className={inputClass} required>
                  <option value="">Select urgency</option>
                  {urgencyLevels.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input name="contactName" value={formData.contactName} onChange={handleChange} className={inputClass} required maxLength={100} />
                </div>
                <div>
                  <label className={labelClass}>Company</label>
                  <input name="company" value={formData.company} onChange={handleChange} className={inputClass} maxLength={100} />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} className={inputClass} required maxLength={255} />
                </div>
                <div>
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} className={inputClass} required maxLength={20} />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Additional Notes</label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} className={`${inputClass} min-h-[120px] resize-y`} maxLength={1000} />
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full md:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default RequestQuote;
