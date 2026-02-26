import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Operations", path: "/operations" },
  { label: "Compliance", path: "/compliance" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-navy py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Anchor className="h-8 w-8 text-secondary" />
          <div>
            <span className="font-display text-xl font-bold text-navy-foreground tracking-tight">
              REGIUSON
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-cobalt-light">
              Marine Services
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-navy-foreground/80 hover:text-navy-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+2348169703636" className="flex items-center gap-2 text-sm text-navy-foreground/80">
            <Phone className="h-4 w-4 text-secondary" />
            <span>24/7 Emergency</span>
          </a>
          <Link to="/request-quote">
            <Button variant="hero" size="default">Request Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-navy-foreground p-2"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-cobalt/20"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm font-medium rounded-md ${
                    location.pathname === link.path
                      ? "text-secondary bg-navy-light"
                      : "text-navy-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-cobalt/20 mt-2 flex flex-col gap-2">
                <a href="tel:+2348169703636" className="flex items-center gap-2 text-sm text-navy-foreground/80 px-4 py-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>+234 816 970 3636</span>
                </a>
                <Link to="/request-quote">
                  <Button variant="hero" size="lg" className="w-full">Request Quote</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
