import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, suffix = "", duration = 2.5 }: { value: number; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: [0.23, 1, 0.32, 1],
        onUpdate: (v) => setDisplay(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#D81F26] tabular-nums">
      {display.toLocaleString("pt-BR")}<span className="text-white/80">{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 2000, suffix: "m²", label: "de espaço total" },
  { value: 15, suffix: "+", label: "carros em exposição" },
  { value: 5000, suffix: "+", label: "clientes satisfeitos" },
  { value: 50, suffix: "+", label: "eventos realizados" },
];

export default function Numbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" ref={ref}>
      {/* Subtle red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D81F26]/3 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase">
            <span className="w-6 h-[1px] bg-[#D81F26]" />
            Nosso Velocímetro
            <span className="w-6 h-[1px] bg-[#D81F26]" />
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-white/30 text-xs font-medium uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
