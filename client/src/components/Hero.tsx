import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Mais que uma hamburgueria. Um ponto de encontro para apaixonados por motores, amigos e hambúrgueres inesquecíveis.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background Image with cinematic treatment */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/IMG_1384_a7637c78.jpeg"
          alt="Garage 68 Interior"
          className="w-full h-full object-cover scale-105"
          style={{ filter: "contrast(1.15) brightness(0.7) saturate(0.9)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      </div>

      {/* Racing Stripe - signature element */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="absolute left-[7%] md:left-[10%] top-0 w-[2px] bg-gradient-to-b from-[#D81F26] via-[#D81F26]/60 to-transparent"
      />

      {/* Checkered pattern subtle accent */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 container">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-white/40 text-xs font-medium tracking-[0.4em] uppercase mb-8">
              <span className="w-8 h-[1px] bg-[#D81F26]" />
              Est. 2023 — Nações
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-bold text-white uppercase leading-[0.82] tracking-[-0.02em]"
          >
            Burger.
            <br />
            <span className="text-[#D81F26]">Friends.</span>
            <br />
            Cars.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 md:mt-10 max-w-lg"
          >
            <p className="text-[15px] sm:text-base text-white/60 leading-relaxed">
              {typedText}
              <span className="inline-block w-[2px] h-4 bg-[#D81F26] ml-0.5 animate-pulse" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#delivery"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#D81F26] text-white font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#ff2a32] transition-all duration-300 active:scale-95 shadow-2xl shadow-[#D81F26]/20"
            >
              <span>Pedir Agora</span>
              <span className="w-4 h-[1px] bg-white/60 group-hover:w-6 transition-all duration-300" />
            </a>
            <a
              href="https://maps.google.com/?q=Rua+Indonesia+101+Nacoes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 font-medium text-xs uppercase tracking-[0.15em] hover:border-white/40 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <MapPin size={14} />
              Como Chegar
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-6 right-8 md:right-12 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] [writing-mode:vertical-lr]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-[#D81F26]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
