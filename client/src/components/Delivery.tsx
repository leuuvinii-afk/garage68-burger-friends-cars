import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";

export default function Delivery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="delivery" className="relative py-32 md:py-40 overflow-hidden" ref={ref}>
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/IMG_1399_05af1e3d.jpeg"
          alt="Ambiente Garage 68"
          className="w-full h-full object-cover"
          style={{ filter: "contrast(1.2) brightness(0.25) saturate(0.6)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase mb-6"
          >
            <span className="w-6 h-[1px] bg-[#D81F26]" />
            Delivery
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase leading-[0.85] mb-6"
          >
            Peça sem
            <br />
            sair de <span className="text-[#D81F26]">casa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/50 text-[15px] leading-relaxed mb-10"
          >
            Nossos hambúrgueres artesanais chegam até você com o mesmo sabor e qualidade de sempre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#20bd5a] transition-all duration-300 active:scale-95"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="https://www.ifood.com.br/delivery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#EA1D2C] text-white font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#ff2a3a] transition-all duration-300 active:scale-95"
            >
              <ShoppingBag size={18} />
              iFood
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
