import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Utensils, Gamepad2, Baby, Tv, Trophy } from "lucide-react";

const diffs = [
  { icon: Car, title: "Coleção de Carros", desc: "Mais de 15 carros clássicos em exposição permanente no salão" },
  { icon: Utensils, title: "Smash Burgers Premium", desc: "Ingredientes selecionados, blend exclusivo e preparo artesanal" },
  { icon: Gamepad2, title: "Karts & Sinuca", desc: "Pista de kart para crianças e mesa de sinuca em formato Mustang" },
  { icon: Baby, title: "Espaço Kids Completo", desc: "Playground com brinquedão, jogos eletrônicos e área segura" },
  { icon: Tv, title: "Telão de Corridas", desc: "F1, MotoGP, NASCAR e eventos esportivos ao vivo" },
  { icon: Trophy, title: "Eventos Exclusivos", desc: "Encontros de carros, rock ao vivo e confraternizações privadas" },
];

export default function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40" ref={ref}>
      {/* Checkered accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left - editorial heading */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase mb-6"
            >
              <span className="w-6 h-[1px] bg-[#D81F26]" />
              Diferenciais
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[0.85]"
            >
              Não é só
              <br />
              hambúrguer.
              <br />
              <span className="text-[#D81F26]">É experiência.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-white/40 text-sm leading-relaxed"
            >
              Cada visita ao Garage 68 é uma imersão completa em um universo de velocidade, sabor e diversão.
            </motion.p>
          </div>

          {/* Right - features grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-[1px] bg-white/5">
              {diffs.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="group bg-[#0A0A0A] p-8 hover:bg-[#111] transition-colors duration-500"
                >
                  <d.icon className="text-white/20 group-hover:text-white/60 mb-4 transition-colors duration-500" size={20} />
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-2">{d.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
