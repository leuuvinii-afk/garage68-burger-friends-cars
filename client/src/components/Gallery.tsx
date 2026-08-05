import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/manus-storage/IMG_1372_fc73a7f6.jpeg", alt: "Nissan 350Z lateral", span: "col-span-2 row-span-2" },
  { src: "/manus-storage/IMG_1386_fa594a16.jpeg", alt: "Chevrolet Opala clássico", span: "" },
  { src: "/manus-storage/IMG_1375_87e1d70f.jpeg", alt: "Pista de kart com motos", span: "" },
  { src: "/manus-storage/IMG_1395_5994dd9d.jpeg", alt: "Ambiente com karts e telão", span: "col-span-2" },
  { src: "/manus-storage/IMG_1373_8bb300ac.jpeg", alt: "Decoração vintage", span: "" },
  { src: "/manus-storage/IMG_1370_7829ee62.jpeg", alt: "Nissan 350Z frente", span: "" },
  { src: "/manus-storage/IMG_1398_8abc45fe.jpeg", alt: "Karts vermelhos", span: "col-span-2" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galeria" className="relative py-32 md:py-40" ref={ref}>
      <div className="container">
        {/* Editorial header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase mb-6"
            >
              <span className="w-6 h-[1px] bg-[#D81F26]" />
              Galeria
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase leading-[0.85]"
            >
              Cada ângulo,<br />uma história
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/40 text-sm max-w-xs"
          >
            Carros, karts, decoração vintage e momentos que só existem aqui.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              className={`relative overflow-hidden cursor-pointer group ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                style={{ filter: "contrast(1.05) brightness(0.9)" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end p-4">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/97 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt="Galeria"
            className="max-w-full max-h-[85vh] object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}
