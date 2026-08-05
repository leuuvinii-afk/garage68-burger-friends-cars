import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram as InstaIcon } from "lucide-react";

const instaImages = [
  "/manus-storage/IMG_1403_0ff888e0.jpeg",
  "/manus-storage/IMG_1372_fc73a7f6.jpeg",
  "/manus-storage/IMG_1375_87e1d70f.jpeg",
  "/manus-storage/IMG_1394_ea3ac8d8.jpeg",
  "/manus-storage/IMG_1386_fa594a16.jpeg",
  "/manus-storage/IMG_1370_7829ee62.jpeg",
];

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-[0.4em] uppercase mb-4"
            >
              <span className="w-6 h-[1px] bg-[#D81F26]" />
              @burgerfriendscars
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-white uppercase"
            >
              Siga o dia a dia
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="https://www.instagram.com/burgerfriendscars"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#D81F26] transition-colors duration-300"
          >
            <InstaIcon size={16} />
            Seguir no Instagram
          </motion.a>
        </div>

        {/* Full-width image strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-[2px]"
        >
          {instaImages.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/burgerfriendscars"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group"
            >
              <img
                src={src}
                alt={`Instagram ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
