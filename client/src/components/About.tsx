import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="historia" className="relative py-32 md:py-40 overflow-hidden" ref={ref}>
      {/* Subtle racing stripe continuation */}
      <div className="absolute top-0 left-[10%] w-[1px] h-32 bg-gradient-to-b from-[#D81F26]/40 to-transparent" />

      <div className="container">
        {/* Editorial asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4">
          {/* Left column - oversized heading */}
          <div className="lg:col-span-5 lg:pr-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase mb-6"
            >
              <span className="w-6 h-[1px] bg-[#D81F26]" />
              Nossa História
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-[0.9] tracking-tight"
            >
              Onde a
              <br />
              velocidade
              <br />
              encontra
              <br />
              <span className="text-[#D81F26]">o sabor</span>
            </motion.h2>

            {/* Feature image - cinematic crop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 overflow-hidden"
            >
              <img
                src="/manus-storage/IMG_1394_ea3ac8d8.jpeg"
                alt="Harley-Davidson vintage no Garage 68"
                className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-1000"
                style={{ filter: "contrast(1.1) brightness(0.85)" }}
              />
            </motion.div>
          </div>

          {/* Right column - text + secondary image */}
          <div className="lg:col-span-7 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 text-white/60 text-[15px] leading-[1.8] max-w-xl"
            >
              <p>
                Nascido em 2023 da paixão por motores, amizade e gastronomia, o <strong className="text-white font-medium">Garage 68</strong> é muito mais que uma hamburgueria. É um verdadeiro templo para os amantes de carros clássicos, velocidade e experiências únicas.
              </p>
              <p>
                Com mais de <strong className="text-white font-medium">2.000m²</strong> de espaço, nosso ambiente une uma coleção impressionante de carros antigos, karts para crianças, mesa de sinuca em formato de Mustang, telão gigante com corridas ao vivo, playground completo e, claro, os melhores hambúrgueres artesanais da região.
              </p>
              <p>
                Cada detalhe foi pensado para transportar você a uma garagem dos sonhos — com placas vintage, neons de marcas icônicas como Ford, Chevrolet e Harley-Davidson, e uma atmosfera que mistura rock, adrenalina e sabor.
              </p>
            </motion.div>

            {/* Two images side by side - editorial style */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="overflow-hidden"
              >
                <img
                  src="/manus-storage/IMG_1403_0ff888e0.jpeg"
                  alt="Hambúrguer artesanal Garage 68"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-1000"
                  style={{ filter: "contrast(1.1) brightness(0.9)" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="overflow-hidden"
              >
                <img
                  src="/manus-storage/IMG_1400_d4fc5f93.jpeg"
                  alt="Mesa de sinuca Mustang"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-1000"
                  style={{ filter: "contrast(1.1) brightness(0.9)" }}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-[1px] w-10 bg-[#D81F26]/60" />
              <span className="text-white/30 text-xs tracking-wider">Rua Indonésia, nº101 — Nações</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
