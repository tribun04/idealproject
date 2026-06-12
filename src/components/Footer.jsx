import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "À Propos", path: "/about" },
        { name: "Nos Projets", path: "/projects" },
        { name: "services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Expertises",
      links: [
        { name: "Construction Neuve", path: "/services/construction" },
        { name: "Rénovation de Prestige", path: "/services/renovation" },
        { name: "Éco-responsable", path: "/services/eco" },
        { name: "Aménagement Extérieur", path: "/services/amenagement" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      
      {/* ── WATERMARK LOGO (Arrière-plan) ── */}
      <div className="absolute inset-x-0 bottom-[-20px] flex justify-center pointer-events-none select-none z-0 opacity-[0.03]">
        <h2 className="text-[8vw] text-center font-bold uppercase leading-none whitespace-nowrap text-white">
          Ideal 
  <br/>          Construction
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Top Section: Branding & Contact Quick Link */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-sm">
            <Link to="/" className="inline-block mb-8">
              <img src="/whitelogo.png" alt="Ideal Construction" className="h-16 w-auto" />
            </Link>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-8">
              Bâtir l'excellence à travers l'innovation technique et un savoir-faire artisanal de précision.
            </p>
            <div className="flex gap-6">
              {["Facebook", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-[#8B0000] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[#8B0000] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-white/40 hover:text-white text-sm transition-colors flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="text-[#8B0000] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
                Coordonnées
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-white/40 text-sm">
                  <MapPin size={18} className="text-[#8B0000] shrink-0" />
                  <span>123 Avenue des Alpes,<br />74000 Annecy, France</span>
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm">
                  <Phone size={18} className="text-[#8B0000] shrink-0" />
                  <a href="tel:+33450000000" className="hover:text-white transition-colors">+33 4 50 00 00 00</a>
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm">
                  <Mail size={18} className="text-[#8B0000] shrink-0" />
                  <a href="mailto:contact@ideal-construction.com" className="hover:text-white transition-colors">contact@ideal-construction.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Bar: Newsletter or Status */}
        <div className="border-y border-white/5 py-10 mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-white text-xl font-light italic">
            Prêt à donner vie à votre projet ?
          </h3>
          <Link 
            to="/contact" 
            className="bg-white text-black px-10 py-4 font-bold text-[11px] tracking-widest uppercase hover:bg-[#8B0000] hover:text-white transition-all"
          >
            Démarrer une consultation
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.15em] uppercase text-white/20">
          <div className="flex flex-wrap justify-center gap-8">
            <span>© {currentYear} Ideal Construction</span>
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Propulsé par</span>
            <a 
              href="https://energenius.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#8B0000] font-bold transition-colors"
            >
              Energenius.agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;