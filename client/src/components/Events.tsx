import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Trophy, Music } from "lucide-react";

const events = [
  {
    icon: Calendar,
    title: "Quarta dos Motores",
    description: "Toda quarta a partir das 18h. Traga seu carro e faça parte.",
    tag: "Semanal",
  },
  {
    icon: Trophy,
    title: "Encontro de Clássicos",
    description: "Exposição mensal com premiação. Opalas, Fuscas, Mustangs.",
    tag: "Mensal",
  },
  {
    icon: Music,
    title: "Rock & Burger Night",
    description: "Bandas ao vivo, rock clássico e os melhores burgers.",
    tag: "Quinzenal",
  },
  {
    icon: Users,
    title: "Eventos Privados",
    description: "Confraternizações e aniversários com experiência automotiva.",
    tag: "Sob demanda",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eventos" className="relative py-32 md:py-40 overflow-hidden" ref={ref}>
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/IMG_1377_e157ad71.jpeg"
          alt="Área de kart e eventos"
          className="w-full h-full object-cover"
          style={{ filter: "contrast(1.2) brightness(0.3) saturate(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/90" />
      </div>

      <div className="container relative z-10">
        {/* Asymmetric editorial header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase mb-6"
            >
              <span className="w-6 h-[1px] bg-[#D81F26]" />
              Eventos & Encontros
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase leading-[0.85]"
            >
              O motor já<br />
              está <span className="text-[#D81F26]">ligado</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/50 text-sm leading-relaxed"
            >
              Encontros semanais, exposições mensais e noites temáticas que reúnem a comunidade automotiva.
            </motion.p>
          </div>
        </div>

        {/* Event cards - editorial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group relative bg-[#0A0A0A] p-8 lg:p-10 hover:bg-[#111] transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#D81F26] group-hover:w-full transition-all duration-700" />
              <span className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">
                {event.tag}
              </span>
              <event.icon className="text-white/30 group-hover:text-[#D81F26] mt-6 mb-4 transition-colors duration-500" size={24} />
              <h3 className="font-display text-lg font-bold text-white uppercase mb-3 tracking-wide">
                {event.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
