import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
  { href: "#delivery", label: "Delivery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#0A0A0A]/97 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src="/manus-storage/IMG_1441_c228e6de.PNG"
            alt="Garage 68"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-[#D81F26]/40 transition-all duration-300"
          />
          <div className="hidden sm:block">
            <span className="font-display text-sm font-bold text-white tracking-[0.15em] uppercase block leading-tight">
              Garage 68
            </span>
            <span className="text-[9px] text-white/30 tracking-[0.2em] uppercase">
              Burger · Friends · Cars
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] font-medium text-white/50 hover:text-white transition-colors duration-300 uppercase tracking-[0.15em] relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D81F26] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#delivery"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#D81F26] text-white text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-[#ff2a32] transition-all duration-300 active:scale-95"
        >
          Pedir Agora
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/70 p-2 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden bg-[#0A0A0A]/99 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col items-start gap-1 py-6 px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full"
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-white/60 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="w-full pt-4">
                <a
                  href="#delivery"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-3 bg-[#D81F26] text-white font-semibold text-sm uppercase tracking-wider"
                >
                  Pedir Agora
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

