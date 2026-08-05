import { Instagram as InstaIcon, Facebook, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/manus-storage/IMG_1441_c228e6de.PNG"
                alt="Garage 68 Logo"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">Garage 68</h3>
                <p className="text-white/30 text-xs tracking-wider">Burger, Friends & Cars</p>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm">
              Motores, amigos e experiências reais. Onde a velocidade encontra o sabor desde 2023.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/burgerfriendscars"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:border-[#D81F26] hover:text-[#D81F26] transition-all duration-300"
              >
                <InstaIcon size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:border-[#D81F26] hover:text-[#D81F26] transition-all duration-300"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Indonesia+101+Nacoes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:border-[#D81F26] hover:text-[#D81F26] transition-all duration-300"
              >
                <MapPin size={14} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-5">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Nossa História", href: "#historia" },
                { label: "Eventos", href: "#eventos" },
                { label: "Galeria", href: "#galeria" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#contato" },
                { label: "Delivery", href: "#delivery" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-5">Visite-nos</h4>
            <div className="space-y-3 text-white/40 text-sm">
              <p>Rua Indonésia, nº101</p>
              <p>Bairro Nações</p>
              <p>Terça a Domingo — 18h às 23h</p>
            </div>
            <div className="mt-6 h-[1px] w-full bg-white/5" />
            <p className="mt-4 text-white/20 text-xs">
              Reservas e eventos: DM no Instagram
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[11px] tracking-wider">
            © 2023–2026 Garage 68. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D81F26]" />
            <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Burger · Friends · Cars</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
