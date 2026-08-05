import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas M.",
    text: "Melhor experiência gastronômica que já tive. O ambiente é incrível, os carros são de tirar o fôlego e o hambúrguer é simplesmente perfeito.",
    rating: 5,
  },
  {
    name: "Fernanda S.",
    text: "Levei meus filhos e eles amaram! O espaço kids é enorme, tem kart, brinquedão, e a comida é deliciosa. Lugar perfeito para a família.",
    rating: 5,
  },
  {
    name: "Ricardo P.",
    text: "Como amante de carros clássicos, encontrei meu paraíso. A coleção é impressionante e os burgers são de outro nível.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="relative py-32 md:py-40" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left heading */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase mb-6"
            >
              <span className="w-6 h-[1px] bg-[#D81F26]" />
              Depoimentos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[0.85]"
            >
              Quem vem,
              <br />
              <span className="text-[#D81F26]">volta.</span>
            </motion.h2>
          </div>

          {/* Right - testimonial cards */}
          <div className="lg:col-span-8 space-y-[1px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="group bg-[#111] p-8 lg:p-10 border-l-2 border-transparent hover:border-[#D81F26] transition-all duration-500"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={12} className="fill-[#D81F26] text-[#D81F26]" />
                  ))}
                </div>
                <p className="text-white/60 text-[15px] leading-[1.8] mb-6">
                  "{t.text}"
                </p>
                <span className="text-white/30 text-xs font-medium uppercase tracking-wider">— {t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
