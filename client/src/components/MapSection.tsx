import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export default function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="relative py-32 md:py-40" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Info - left */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase mb-6"
            >
              <span className="w-6 h-[1px] bg-[#D81F26]" />
              Contato & Localização
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[0.85] mb-10"
            >
              Seu próximo
              <br />
              pit stop
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-[#D81F26] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Endereço</h4>
                  <p className="text-white/40 text-sm">Rua Indonésia, nº101 — Bairro Nações</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={16} className="text-white/30 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Horário</h4>
                  <p className="text-white/40 text-sm">Terça a Domingo — 18h às 23h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={16} className="text-white/30 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Contato</h4>
                  <p className="text-white/40 text-sm">Instagram @burgerfriendscars</p>
                </div>
              </div>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="https://maps.google.com/?q=Rua+Indonesia+101+Nacoes"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-10 px-6 py-3 bg-[#D81F26] text-white font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#ff2a32] transition-all duration-300 active:scale-95"
            >
              <MapPin size={14} />
              Abrir no Maps
              <span className="w-3 h-[1px] bg-white/60 group-hover:w-5 transition-all duration-300" />
            </motion.a>
          </div>

          {/* Map - right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 w-full h-[400px] lg:h-[500px] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988!2d-48.5!3d-1.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjEnMDAuMCJTIDQ4wrAzMCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1) grayscale(20%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Garage 68"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
