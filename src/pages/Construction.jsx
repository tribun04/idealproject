import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, Shield, Ruler } from "lucide-react";

const Construction = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white  ">
      
      {/* 1. HERO SECTION - BOLD & SPACIOUS */}
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
            <h1 className="text-6xl md:text-[120px] font-serif leading-[0.85] text-stone-900 mb-10">
              Bâtir <br />
              <span className="italic text-[#bc0108]">l'excellence.</span>
            </h1>
            <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
              De la première esquisse à la remise des clés, nous érigeons des demeures qui défient le temps et capturent l'horizon.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="order-1 lg:order-2 h-[500px] md:h-[750px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
              className="w-full h-full object-cover" 
              alt="Modern construction architecture  backdrop-brightness-50" 
             style={{ filter: 'brightness(40%)' }} />
          </motion.div>
        </div>
      </section>

      {/* 2. THE TECHNICAL CORE - NUMBERED CARDS */}
   <section className="py-32 bg-white px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    
    {/* Header with Vertical Red Accent */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
      <div className="relative pl-8 border-l-2 border-[#bc0108]">
        <span className="text-[#bc0108] text-[10px] tracking-[0.6em] uppercase font-bold block mb-4">
          Ingénierie & Rigueur
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
          Une vision <br /> 
          <span className="italic text-[#bc0108]">sans limite technique.</span>
        </h2>
      </div>
      <div className="hidden lg:block text-right">
        <span className="text-[120px] font-serif leading-none text-stone-50 select-none font-bold">
          03
        </span>
      </div>
    </div>

    {/* The Technical Grid */}
    <div className="grid md:grid-cols-3 border-t border-stone-100">
      {[
        { 
          id: "01", 
          title: "Conception", 
          icon: <Ruler className="w-6 h-6"/>, 
          desc: "Architecture personnalisée intégrant parfaitement votre terrain et vos envies les plus audacieuses." 
        },
        { 
          id: "02", 
          title: "Structure", 
          icon: <Shield className="w-6 h-6"/>, 
          desc: "Gros œuvre d'une précision chirurgicale pour une base pérenne, solide et durable." 
        },
        { 
          id: "03", 
          title: "Finition", 
          icon: <Home className="w-6 h-6"/>, 
          desc: "Matériaux nobles et finitions premium pour un rendu intérieur d'exception à chaque m²." 
        }
      ].map((step, index) => (
        <motion.div 
          {...fadeInUp} 
          key={step.id} 
          className={`relative p-12 group transition-all duration-700 hover:bg-stone-50 border-stone-100
            ${index !== 2 ? "md:border-r" : ""} 
            border-b md:border-b-0`}
        >
          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 w-0 h-1 bg-[#bc0108] transition-all duration-700 group-hover:w-full" />
          
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <span className="text-5xl font-serif italic text-[#bc0108] opacity-20 group-hover:opacity-100 transition-opacity duration-700">
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

            {/* "Read More" Style Link */}
            <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#bc0108] flex items-center gap-2">
                 Détails <div className="w-8 h-px bg-[#bc0108]" />
               </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* 3. DETAIL & MATERIAL - LARGE IMAGE LAYOUT */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold">Engagement</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              L'exigence du <br /> <span className="italic text-[#bc0108]">clé en main.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              Nous pilotons l'intégralité des corps de métier. Études de faisabilité, dépôt de permis, suivi quotidien du chantier : votre seule mission est de rêver votre futur habitat.
            </p>
            <div className="space-y-4 pt-4">
               {["Normes RE2020", "Garantie Décennale", "Matériaux Biosourcés"].map((text) => (
                 <div key={text} className="flex items-center gap-4 group cursor-default">
                    <div className="w-2 h-2 rounded-full border border-[#bc0108] group-hover:bg-[#bc0108] transition-all" />
                    <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">{text}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="lg:col-span-7 relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000" 
              className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              alt="Finished house"
            />
            {/* Design element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#bc0108] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA - HIGH IMPACT DARK SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-stone-900 py-24 px-8 md:px-24 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
            
            <motion.div {...fadeInUp} className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10">
                Donnez vie à <br /> <span className="italic text-[#bc0108]">votre projet.</span>
              </h2>
              <p className="text-stone-400 max-w-md mx-auto mb-12 font-light leading-relaxed">
                Contactez-nous pour une étude personnalisée de votre projet de construction neuve en Haute-Savoie.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-6 bg-[#bc0108] text-white px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-2xl"
              >
                Demander un devis <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Construction;