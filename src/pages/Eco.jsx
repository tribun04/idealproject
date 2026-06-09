import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Leaf, ShieldCheck, ThermometerSun } from "lucide-react";

const Eco = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white pt-24 md:pt-32">
      
      {/* 1. HERO SECTION - CLEAN & ORGANIC */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <Link to="/services" className="flex items-center gap-2 text-[#bc0108] text-[10px] tracking-[0.4em] uppercase font-bold mb-8 hover:translate-x-[-5px] transition-transform">
              <ArrowLeft className="w-4 h-4" /> Services
            </Link>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif leading-[0.9] text-stone-900">
              Construire <br />
              <span className="italic text-[#bc0108]">pour demain.</span>
            </h1>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
               <p className="text-stone-500 text-lg font-light leading-relaxed">
                  L'éco-responsabilité n'est plus une option, c'est une exigence structurelle. Nous fusionnons haute performance énergétique et esthétique intemporelle.
               </p>
               <div className="flex flex-col justify-end">
                  <div className="w-full h-px bg-stone-200 mb-4" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 italic">Architecture Bioclimatique</span>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 aspect-[4/5] overflow-hidden"
          >       
            <img 
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200" 
              alt="Sustainable wood architecture" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. PERFORMANCE METRICS - MINIMALIST GRID */}
      <section className="py-24 bg-stone-900 text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#bc0108]/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold block mb-16 text-center">Indicateurs de Performance</span>
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {[
              { 
                icon: <Leaf className="w-5 h-5 text-[#bc0108]" />, 
                label: "Matières", 
                title: "Biosourcé", 
                desc: "Utilisation prioritaire de bois certifiés, pierre locale et isolants naturels." 
              },
              { 
                icon: <ThermometerSun className="w-5 h-5 text-[#bc0108]" />, 
                label: "Thermique", 
                title: "Basse Consommation", 
                desc: "Conception passive pour une régulation naturelle de la température." 
              },
              { 
                icon: <ShieldCheck className="w-5 h-5 text-[#bc0108]" />, 
                label: "Santé", 
                title: "Qualité de l'Air", 
                desc: "Zéro COV et systèmes de ventilation intelligents pour un habitat sain." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="space-y-6 text-center md:text-left"
              >
                <div className="flex justify-center md:justify-start">{item.icon}</div>
                <div>
                   <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 block mb-2">{item.label}</span>
                   <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                   <p className="text-stone-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE "WHY" - OVERLAPPING CONTENT */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
             <div className="relative group">
                <div className="absolute -inset-4 border border-stone-100 group-hover:border-[#bc0108]/30 transition-colors duration-700" />
                <img 
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200" 
                  className="relative z-10 w-full aspect-square object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  alt="Nature integrated building"
                />
             </div>
          </motion.div>

          <motion.div {...fadeInUp} className="order-1 lg:order-2 space-y-8">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">L'Engagement</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-[1.1]">
              Construire sans <br /> <span className="italic text-[#bc0108]">compromis esthétique.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              Nous prouvons qu'un projet durable peut être un chef-d'œuvre architectural. L'écologie devient alors un vecteur de design, influençant l'orientation, les ouvertures et le choix des textures.
            </p>
            <div className="pt-8 border-t border-stone-100 flex items-center gap-12">
               <div>
                  <p className="text-2xl font-serif text-stone-900">-40%</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400">Empreinte Carbone</p>
               </div>
               <div>
                  <p className="text-2xl font-serif text-stone-900">RE2020</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400">Norme Excellence</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - CONSISTENT BRANDING */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-stone-50 py-24 px-8 border border-stone-100 relative overflow-hidden flex flex-col items-center text-center">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8">
                Initions votre projet <br /><span className="italic text-[#bc0108]">responsable.</span>
              </h2>
              <p className="text-stone-500 mb-12 font-light tracking-wide">
                Discutons de vos ambitions environnementales et de la vision de votre futur habitat.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-6 bg-stone-900 text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#bc0108] transition-all duration-500 shadow-2xl"
              >
                Contacter un expert <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Decorative ghost text */}
            <span className="absolute bottom-[-10%] right-[-5%] text-[15vw] font-serif text-stone-200/40 pointer-events-none select-none uppercase -rotate-12">
              Future
            </span>
        </div>
      </section>
    </div>
  );
};

export default Eco;