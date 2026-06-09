import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, Sun, Layout } from "lucide-react";

const Amenagement = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white pt-24 md:pt-32">
      
      {/* 1. HERO SECTION - ASYMMETRIC */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <Link to="/services" className="flex items-center gap-2 text-[#bc0108] text-[10px] tracking-[0.4em] uppercase font-bold mb-8 hover:translate-x-[-5px] transition-transform">
              <ArrowLeft className="w-4 h-4" /> Services
            </Link>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif leading-[0.9] text-stone-900">
              Agencer <br />
              <span className="italic text-[#bc0108]">l'espace.</span>
            </h1>
            <p className="mt-10 text-stone-500 text-lg font-light max-w-md leading-relaxed">
              L'aménagement n'est pas une question de remplissage, mais de libération. Nous sculptons le vide pour créer le confort.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200" 
              alt="Interior flow" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-white p-8 hidden md:block">
              <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400">Projet Villa Lacanau — 2023</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS - ICONIC GRID */}
      <section className="py-24 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {[
              { 
                icon: <Maximize2 className="w-6 h-6 text-[#bc0108]" />, 
                title: "Volumes", 
                desc: "Optimisation millimétrée des surfaces pour une sensation de grandeur constante." 
              },
              { 
                icon: <Sun className="w-6 h-6 text-[#bc0108]" />, 
                title: "Lumière", 
                desc: "Captation du jour pour transformer l'atmosphère intérieure au fil des heures." 
              },
              { 
                icon: <Layout className="w-6 h-6 text-[#bc0108]" />, 
                title: "Fluidité", 
                desc: "Étude des circulations pour un quotidien naturel et sans entraves." 
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white p-12 space-y-6 hover:bg-stone-50 transition-colors">
                {pillar.icon}
                <h3 className="text-xl font-bold uppercase tracking-tighter">{pillar.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH TEXTURE & PHILOSOPHY */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div {...fadeInUp} className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Architecture detail"
               />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">L'expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              L'art de vivre <br /> <span className="italic text-[#bc0108]">dedans-dehors.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              Nous effaçons les frontières entre vos espaces de vie et leur environnement. Que ce soit pour une terrasse suspendue ou un salon ouvert, chaque ligne est pensée pour l'harmonie.
            </p>
            <ul className="space-y-4 pt-4 border-t border-stone-100">
               {["Cuisines sur-mesure", "Suites parentales", "Espaces Outdoor"].map((item) => (
                 <li key={item} className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-600">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#bc0108]" />
                   {item}
                 </li>
               ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - DARK THEME CONSISTENCY */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-stone-900 py-24 px-8 relative overflow-hidden text-center">
            {/* Background decorative text */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/5 pointer-events-none select-none uppercase">
              Projet
            </span>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-12">
                Réinventez votre <span className="italic text-[#bc0108]">quotidien.</span>
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-6 bg-[#bc0108] text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-xl"
              >
                Planifier un rendez-vous <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Amenagement;