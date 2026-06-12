import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, RefreshCcw, Sparkles, Layers, Quote } from "lucide-react";

const Renovation = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white ">
      
      {/* 1. HERO SECTION - ASYMMÉTRIQUE */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <Link to="/services" className="flex items-center gap-2 text-[#bc0108] text-[10px] tracking-[0.4em] uppercase font-bold mb-10 hover:translate-x-[-5px] transition-transform">
              <ArrowLeft className="w-4 h-4" /> Retour aux services
            </Link>
            <h1 className="text-6xl md:text-[110px] font-serif leading-[0.85] text-stone-900 mb-10">
              Sublimer <br />
              <span className="italic text-[#bc0108]">l'existant.</span>
            </h1>
            <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Nous redonnons vie aux demeures de caractère en alliant respect du patrimoine et exigences du confort moderne.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="order-1 lg:order-2 h-[500px] md:h-[700px] overflow-hidden shadow-2xl relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Luxury Renovation " style={{ filter: 'brightness(50%)' }}  
            />
            <div className="absolute bottom-0 left-0 bg-[#bc0108] text-white p-6 md:p-10">
               <span className="text-4xl md:text-6xl font-serif italic">Avant / Après</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHIE - SECTION TEXTE */}
      <section className="py-32 bg-stone-50 border-y border-stone-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div {...fadeInUp} className="lg:col-span-5 border-l-2 border-[#bc0108] pl-8">
              <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold block mb-4">Notre Vision</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                L'équilibre entre <br /> <span className="italic text-[#bc0108]">âme et modernité.</span>
              </h2>
            </motion.div>
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <p className="text-xl font-light text-stone-600 leading-loose">
                Rénover, c’est avant tout comprendre l’histoire d’un lieu. Notre approche repose sur une analyse structurelle rigoureuse pour conserver les éléments nobles tout en intégrant des solutions énergétiques et domotiques de pointe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LES ÉTAPES DE TRANSFORMATION - GRILLE NUMÉROTÉE */}
      <section className="py-32 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 border-t border-stone-100">
            {[
              { 
                id: "01", 
                title: "Diagnostic", 
                icon: <Layers className="w-6 h-6"/>, 
                desc: "Expertise technique complète de la structure, des fluides et de la performance thermique actuelle." 
              },
              { 
                id: "02", 
                title: "Curation", 
                icon: <RefreshCcw className="w-6 h-6"/>, 
                desc: "Démolition sélective pour révéler le potentiel des volumes et préserver les matériaux d'origine." 
              },
              { 
                id: "03", 
                title: "Métamorphose", 
                icon: <Sparkles className="w-6 h-6"/>, 
                desc: "Réinterprétation architecturale avec des finitions d'exception pour un cadre de vie inégalé." 
              }
            ].map((step, index) => (
              <motion.div 
                {...fadeInUp} 
                key={step.id} 
                className={`relative p-12 group transition-all duration-700 hover:bg-stone-50 border-stone-100
                  ${index !== 2 ? "md:border-r" : ""} 
                  border-b md:border-b-0`}
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#bc0108] transition-all duration-700 group-hover:w-full" />
                
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <span className="text-6xl font-serif italic text-stone-100 group-hover:text-[#bc0108]/20 transition-colors duration-700">
                      {step.id}
                    </span>
                    <div className="text-stone-300 group-hover:text-[#bc0108] transition-colors duration-500 transform group-hover:rotate-12">
                      {step.icon}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-stone-900">
                      {step.title}
                    </h3>
                    <p className="text-stone-500 font-light leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE TECHNIQUE - IMAGE CENTRALE */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
             initial={{ opacity: 0, scale: 1.1 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}
             className="lg:col-span-7 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069" 
              className="w-full aspect-[4/3] object-cover shadow-2xl"
              alt="Technical expertise"
            />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border-r border-b border-[#bc0108] hidden md:block" />
          </motion.div>

          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">Patrimoine & Avenir</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight text-stone-900">
              L'exigence du <br /> <span className="italic text-[#bc0108]">détail caché.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              Une rénovation réussie est celle où la technique disparaît derrière l'esthétique. Nous intégrons les réseaux, l'isolation et la domotique de manière invisible pour ne laisser place qu'à l'émotion architecturale.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-stone-100">
               <div>
                 <h4 className="text-stone-900 font-bold uppercase text-xs tracking-widest mb-2">Structure</h4>
                 <p className="text-xs text-stone-400 font-light">Renforcement et assainissement complet des fondations.</p>
               </div>
               <div>
                 <h4 className="text-stone-900 font-bold uppercase text-xs tracking-widest mb-2">Énergie</h4>
                 <p className="text-xs text-stone-400 font-light">Mise aux normes thermiques RE2020 pour le bâti ancien.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA - STYLE DARK CONSTRUCTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto mb-20">
        <div className="bg-stone-900 py-24 px-8 md:px-24 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
            
            <motion.div {...fadeInUp} className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10">
                Sublimez votre <br /> <span className="italic text-[#bc0108]">patrimoine.</span>
              </h2>
              <p className="text-stone-400 max-w-lg mx-auto mb-12 font-light leading-relaxed">
                Contactez nos experts pour une étude de faisabilité et un chiffrage précis de votre projet de rénovation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-6 bg-[#bc0108] text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-2xl"
              >
                Lancer mon projet <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Renovation;