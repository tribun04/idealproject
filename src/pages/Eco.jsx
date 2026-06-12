import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Leaf, ThermometerSun, ShieldCheck, Quote } from "lucide-react";

const Eco = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white  ">
      
      {/* 1. HERO SECTION - ASYMMÉTRIQUE & ÉPURÉE */}
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
              Construire <br />
              <span className="italic text-[#bc0108]">pour demain.</span>
            </h1>
            <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
              L'éco-responsabilité n'est plus une option, c'est une exigence structurelle. Nous fusionnons haute performance et esthétique intemporelle.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="order-1 lg:order-2 h-[500px] md:h-[750px] overflow-hidden shadow-2xl relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
              alt="Sustainable Architecture"  style={{ filter: 'brightness(45%)' }}
            />
            <div className="absolute bottom-0 right-0 bg-[#bc0108] text-white p-6 md:p-10">
               <span className="text-4xl md:text-6xl font-serif italic">Pureté</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LES INDICATEURS - GRILLE TECHNIQUE (Cohérence avec Construction) */}
      <section className="py-32 bg-stone-900 text-white px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="relative pl-8 border-l-2 border-[#bc0108]">
              <span className="text-[#bc0108] text-[10px] tracking-[0.6em] uppercase font-bold block mb-4">
                Haute Performance
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                Une vision <br /> 
                <span className="italic text-[#bc0108]">bas carbone.</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right">
              <span className="text-[120px] font-serif leading-none text-white/5 select-none font-bold">
                RE20
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-white/10">
            {[
              { 
                id: "01", 
                title: "Matières", 
                icon: <Leaf className="w-6 h-6"/>, 
                desc: "Utilisation prioritaire de bois certifiés, de pierre locale et d'isolants biosourcés pour un impact minimal." 
              },
              { 
                id: "02", 
                title: "Thermique", 
                icon: <ThermometerSun className="w-6 h-6"/>, 
                desc: "Conception bioclimatique passive optimisant l'ensoleillement et réduisant les besoins en énergie." 
              },
              { 
                id: "03", 
                title: "Santé", 
                icon: <ShieldCheck className="w-6 h-6"/>, 
                desc: "Zéro COV et systèmes de ventilation intelligents pour garantir une qualité de l'air exceptionnelle." 
              }
            ].map((step, index) => (
              <motion.div 
                {...fadeInUp} 
                key={step.id} 
                className={`relative p-12 group transition-all duration-700 hover:bg-stone-800 border-white/10
                  ${index !== 2 ? "md:border-r" : ""} 
                  border-b md:border-b-0`}
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#bc0108] transition-all duration-700 group-hover:w-full" />
                
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <span className="text-5xl font-serif italic text-[#bc0108] opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                      {step.id}
                    </span>
                    <div className="text-stone-600 group-hover:text-[#bc0108] transition-colors duration-500">
                      {step.icon}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-white">
                      {step.title}
                    </h3>
                    <p className="text-stone-400 font-light leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. L'ENGAGEMENT - IMAGE & CHIFFRES */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">L'Exigence</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Design <br /> <span className="italic text-[#bc0108]">Durable.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              Nous prouvons qu'un projet durable peut être un chef-d'œuvre architectural. L'écologie devient un vecteur de design, influençant l'orientation, les ouvertures et le choix des textures pour une harmonie parfaite avec la nature.
            </p>
            <div className="pt-8 border-t border-stone-100 flex items-center gap-12">
               <div>
                  <p className="text-3xl font-serif text-stone-900">-40%</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">Empreinte Carbone</p>
               </div>
               <div className="w-px h-12 bg-stone-100" />
               <div>
                  <p className="text-3xl font-serif text-stone-900">A+</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">Classe Énergétique</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="lg:col-span-7 relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1518005020453-1bb74465021d?q=80&w=2000" 
              className="w-full aspect-[16/10] object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Eco Material Detail"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#bc0108] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA - STYLE DARK CONSTRUCTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-stone-900 py-24 px-8 md:px-24 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
            
            <motion.div {...fadeInUp} className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10">
                Initions votre projet <br /> <span className="italic text-[#bc0108]">responsable.</span>
              </h2>
              <p className="text-stone-400 max-w-md mx-auto mb-12 font-light leading-relaxed">
                Contactez-nous pour une étude personnalisée de votre projet de construction ou rénovation éco-responsable.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-6 bg-[#bc0108] text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-2xl"
              >
                Parler à un expert <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            {/* Ghost Text */}
            <span className="absolute bottom-[-10%] right-[-5%] text-[12vw] font-serif text-white/[0.03] pointer-events-none select-none uppercase font-bold tracking-tighter">
              Durable
            </span>
        </div>
      </section>
    </div>
  );
};

export default Eco;