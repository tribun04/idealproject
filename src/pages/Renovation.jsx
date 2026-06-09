import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Renovation = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className=" bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white mt-24 md:pt-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-6 md:px-12 max-w-[1800px] mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl"
        >
          <Link to="/services" className="flex items-center gap-2 text-[#bc0108] text-[10px] tracking-[0.4em] uppercase font-bold mb-6 hover:translate-x-[-5px] transition-transform">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Link>
          <h1 className="text-5xl md:text-8xl lg:text-[100px] font-serif leading-[1.1] text-stone-900">
            Rénover <br />
            <span className="italic text-[#bc0108]">l'histoire.</span>
          </h1>
          <p className="mt-6 text-stone-500 text-sm md:text-base max-w-xl leading-relaxed">
            Donner un second souffle à l’existant sans en trahir l’âme. Une approche chirurgicale de l’architecture.
          </p>
        </motion.div>
        <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200" alt="Rénovation" className="absolute top-0 right-0 w-1/2 h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hidden lg:block" />
      </section>

      {/* 2. L'APPROCHE - FIXED COLUMN WIDTHS */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side */}
          <motion.div {...fadeInUp} className="space-y-8">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">L'approche</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Révéler le potentiel <br className="hidden md:block" /> invisible de votre bien.
            </h2>
            <div className="text-stone-500 font-light text-lg leading-relaxed space-y-6">
              <p>
                La rénovation est un exercice d'équilibre entre le respect du patrimoine et l'exigence du confort contemporain. 
              </p>
              <p>
                Nous intervenons sur des villas, chalets et appartements de caractère pour en magnifier chaque volume, 
                en utilisant des matériaux qui racontent une histoire.
              </p>
            </div>
            
            {/* Features list - Horizontal on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-stone-100">
              {["Expertise", "Matières", "Énergie"].map((text) => (
                <div key={text} className="space-y-2">
                  <div className="w-8 h-px bg-[#bc0108]" />
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual Box */}
          <motion.div {...fadeInUp} className="relative flex items-center justify-center lg:justify-end">
            <div className="relative p-8 md:p-16 border border-stone-100 shadow-2xl max-w-md bg-white">
               <img 
                src="data:image/jpeg;base64,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" 
                className="w-full h-64 object-cover mb-8 grayscale" 
                alt="Architecture detail"
               />
               <p className="text-2xl md:text-3xl font-serif italic text-[#bc0108] leading-snug">
                "Respecter le passé, <br/> bâtir le futur."
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PROCESS - CLEAN GRID */}
      <section className="py-24 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold block mb-4">Le Processus</span>
            <h2 className="text-3xl md:text-4xl font-serif">Une méthodologie <span className="italic text-[#bc0108]">sans compromis.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: "01", title: "Diagnostic", desc: "Analyse technique profonde des structures et du potentiel architectural." },
              { id: "02", title: "Conception", desc: "Plans détaillés, choix des textures et harmonisation de la lumière." },
              { id: "03", title: "Réalisation", desc: "Pilotage des artisans et contrôle rigoureux de la qualité d'exécution." }
            ].map((step) => (
              <div key={step.id} className="bg-white p-10 border border-stone-100 hover:shadow-xl transition-all group">
                <span className="text-4xl font-serif text-stone-200 group-hover:text-[#bc0108] transition-colors block mb-6">{step.id}</span>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <div className="bg-stone-900 py-20 px-8">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-10">Prêt à transformer votre espace ?</h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-[#bc0108] text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-stone-900 transition-all duration-500"
            >
              Démarrer le projet <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Renovation;