import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Regiuson Marine logo" className="h-10 w-auto" />
              <div>
                <span className="font-display text-lg font-bold tracking-tight">REGIUSON</span>
                <span className="block text-[9px] font-medium uppercase tracking-[0.25em] text-cobalt-light">
                  Marine Services
                </span>
              </div>
            </div>
            <p className="text-sm text-navy-foreground/60 leading-relaxed">
              Securing maritime operations across Nigerian waters since 2007. Trusted by international operators for safety, compliance, and operational excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-cobalt-light">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Operations", path: "/operations" },
                { label: "Compliance", path: "/compliance" },
                { label: "Request a Quote", path: "/request-quote" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-cobalt-light">
              Our Services
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                "Armed Guard Escort",
                "K9 Stowaway Search",
                "Crew Change Assistance",
                "24/7 Onboard Security",
                "Port Agent Services",
                "Marine Logistics",
              ].map((service) => (
                <Link key={service} to="/services" className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-cobalt-light">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-navy-foreground/60">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span>33, Creek Road, Apapa, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:+2348169703636" className="hover:text-navy-foreground">+234 816 970 3636</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:+2348102411100" className="hover:text-navy-foreground">+234 810 241 1100</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:regiusonmarineservices@yahoo.com" className="hover:text-navy-foreground break-all">regiusonmarineservices@yahoo.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-foreground/10 flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className="text-xs text-navy-foreground/40">
              © {new Date().getFullYear()} Regiuson Marine Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-navy-foreground/40">
              <Link to="/privacy" className="hover:text-navy-foreground/60">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-navy-foreground/60">Terms of Service</Link>
              <Link to="/disclaimer" className="hover:text-navy-foreground/60">Disclaimer</Link>
            </div>
          </div>
          <p className="text-xs text-navy-foreground/30">Made by Dave Smith</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
