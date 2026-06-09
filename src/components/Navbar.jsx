import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const mainLinks = [
    { name: "Accueil", path: "/" },
    { name: "Imaginer", path: "/imaginer" },
    { name: "Services", path: "/services" },
    { name: "Réaliser", path: "/projects" },
  ];

  const serviceLinks = [
    { name: "Construction", path: "/services/construction" },
    { name: "Rénovation", path: "/services/renovation" },
    { name: "Aménagement", path: "/services/amenagement" },
    { name: "Éco-responsable", path: "/services/eco" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      {/* ─────────────────────────── DESKTOP NAV ─────────────────────────── */}
      <nav
        className={`fixed top-0 w-full z-[120] transition-all duration-500
          ${scrolled
            ? "py-3 bg-white/98 backdrop-blur-lg border-b border-stone-200/80 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "py-6 bg-white"
          }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="group z-[130] flex items-center">
            <img
              src="/logo.png"
              alt="Toska Logo"
              className="h-[85px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-70"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">

            {/* Main navigation links */}
            {mainLinks.map((item) => {
              // Special handling for Services - show dropdown
              if (item.name === "Services") {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.path}
                      className={`flex items-center gap-2 text-[12px] tracking-[0.45em] uppercase font-semibold transition-colors duration-300
                        ${isActive(item.path) ? "text-[#bc0108]" : "text-stone-900 hover:text-stone-700"}`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white border border-stone-200/80 shadow-lg rounded-sm overflow-hidden">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="block px-6 py-3 text-[11px] tracking-[0.4em] uppercase text-stone-600 hover:bg-stone-50 hover:text-[#bc0108] transition-all duration-300 whitespace-nowrap"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              
              // Regular link rendering
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-[12px] tracking-[0.45em] uppercase font-semibold transition-colors duration-300 group
                    ${isActive(item.path) ? "text-[#bc0108]" : "text-stone-900 hover:text-stone-700"}`}
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1.5 left-0 h-px bg-[#bc0108] transition-all duration-500"
                    style={{ width: isActive(item.path) ? "100%" : "0%" }}
                  />
                  {!isActive(item.path) && (
                    <span className="absolute -bottom-1.5 left-0 h-px bg-[#bc0108] w-0 group-hover:w-full transition-all duration-500" />
                  )}
                </Link>
              );
            })}


            {/* CTA Button — appears only once */}
            <Link
              to="/contact"
              className="group relative overflow-hidden ml-4 border border-stone-300 px-7 py-2.5 text-[11px] tracking-[0.4em] uppercase text-stone-800 transition-colors duration-300 hover:border-[#bc0108]"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Devis gratuit
              </span>
              <div className="absolute inset-0 bg-[#bc0108] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="lg:hidden z-[130] flex flex-col gap-[7px] p-2 cursor-pointer"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span
              className={`block w-8 h-0.5 bg-current origin-center transition-all duration-500
                ${isOpen ? "rotate-45 translate-y-[9px] !text-white" : "text-stone-900"}`}
            />
            <span
              className={`block w-8 h-0.5 bg-current transition-all duration-500
                ${isOpen ? "opacity-0 !text-white" : "text-stone-900"}`}
            />
            <span
              className={`block w-8 h-0.5 bg-current origin-center transition-all duration-500
                ${isOpen ? "-rotate-45 -translate-y-[9px] !text-white" : "text-stone-900"}`}
            />
          </button>
        </div>
      </nav>

      {/* ─────────────────────────── MOBILE OVERLAY ─────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-[110] bg-black transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >

        {/* TOSKA watermark */}
      <span
  aria-hidden="true"
  className="pointer-events-none select-none absolute inset-x-0 bottom-0 flex items-end justify-center"
  style={{
    fontFamily: "var(--font-display, serif)",
    fontSize: "clamp(30px, 10vw, 130px)", // smaller text
    fontWeight: 700,
    letterSpacing: "0.05em",
    lineHeight: 0.9,
    color: "transparent",
    WebkitTextStroke: "1px rgba(255,255,255,0.06)",
    userSelect: "none",
    zIndex: 0,
    textTransform: "uppercase",
    textAlign: "center",
  }}
>
  IdeaL
  <br />
  Construction
</span>
        <div className="relative h-full flex flex-col lg:flex-row">

          {/* Navigation content */}
          <div className="flex-1 flex flex-col justify-center pt-[6.5rem] px-8 md:px-20 gap-1 pt-26 mt-29 overflow-y-auto scrollbar-auto overflow-auto    scrollbar-thin scrollbar-thumb-stone-700/20 scrollbar-track-transparent">

            {/* Main links */}
            {mainLinks.map((item, i) => {
              // Skip Services here since it's handled separately below
              if (item.name === "Services") return null;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-5 py-4 transition-all duration-700
                    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: isOpen ? `${i * 80 + 150}ms` : "0ms" }}
                >
                  <span className="text-sm italic font-serif transition-opacity duration-300"
                    style={{ color: "#bc0108", opacity: isActive(item.path) ? 1 : 0.25 }}>
                    0{i + 1}
                  </span>
                  <span
                    className={`text-5xl md:text-7xl font-serif transition-all duration-300 group-hover:italic
                      ${isActive(item.path) ? "text-[#bc0108]" : "text-white group-hover:text-[#bc0108]"}`}
                    style={{ fontFamily: "var(--font-display, serif)" }}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* Services section */}
            <div className={`transition-all duration-700 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: isOpen ? `${mainLinks.length * 80 + 150}ms` : "0ms" }}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="group flex items-center gap-5 py-4 w-full transition-all duration-300"
              >
                <span className="text-sm italic font-serif text-[#bc0108]/25 group-hover:text-[#bc0108]/100 transition-opacity">
                  04
                </span>
                <span className="text-5xl md:text-7xl font-serif text-white group-hover:text-[#bc0108] transition-all"
                  style={{ fontFamily: "var(--font-display, serif)" }}>
                  Services
                </span>
                <ChevronDown className={`w-6 h-6 text-[#bc0108] ml-auto transition-transform duration-500 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Services submenu */}
              <div className={`overflow-hidden transition-all duration-500 ${servicesOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-8 md:pl-20 space-y-3 pb-4">
                  {serviceLinks.map((service, i) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                      className="group flex items-center gap-4 py-2 transition-all duration-300"
                    >
                      <span className="text-xs italic font-serif text-white/20 group-hover:text-[#bc0108] transition-colors">
                        0{mainLinks.length + 1 + i}
                      </span>
                      <span className="text-lg md:text-2xl font-serif text-white/50 group-hover:text-[#bc0108] transition-colors"
                        style={{ fontFamily: "var(--font-display, serif)" }}>
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button in mobile menu */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`mt-8 self-start border border-white/20 px-8 py-3 text-[11px] tracking-[0.4em] uppercase text-white/60 hover:text-white hover:border-[#bc0108] transition-all duration-300
                ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: isOpen ? `${(mainLinks.length + 1) * 80 + 150}ms` : "0ms" }}
            >
              Devis gratuit
            </Link>
          </div>

          {/* Contact panel */}
<div className={`lg:w-80 border-t mt-2 border-white/10 lg:border-t-0 lg:border-l lg:border-white/10 p-2 flex flex-col justify-end
transition-all duration-700 delay-500
${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#bc0108] block mb-3">
                  Bureau
                </span>
                <p className="text-white/40 font-light leading-relaxed text-sm">
                  124 Avenue du Lac
                  <br />
                  74200 Thonon-les-Bains
                </p>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#bc0108] block mb-3">
                  Contact
                </span>
                <a href="mailto:hello@toska-archi.com"
                  className="block text-white/40 hover:text-white text-sm font-light transition-colors">
                  hello@toska-archi.com
                </a>
                <a href="tel:+33450123456"
                  className="block text-white/40 hover:text-white text-sm font-light transition-colors mt-1">
                  +33 (0)4 50 12 34 56
                </a>
              </div>
              <div className="flex gap-6 pt-2">
                {["Instagram", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href={`https://${s.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-[0.3em] uppercase text-white/25 hover:text-[#bc0108] transition-colors duration-300"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;