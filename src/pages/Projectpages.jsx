import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, MapPin } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'Construction', 'Rénovation', 'Aménagement', 'Éco-Responsable'];

  const projects = [
    {
      id: 1,
      title: "Villa Haute-Savoie",
      category: "Construction",
      location: "Annecy, France",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
    },
    {
      id: 2,
      title: "Chalet L'Alpage",
      category: "Rénovation",
      location: "Megeve, France",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000"
    },
    {
      id: 3,
      title: "Loft Industriel",
      category: "Aménagement",
      location: "Lyon, France",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080"
    },
    {
      id: 4,
      title: "Résidence Éco-Bois",
      category: "Éco-Responsable",
      location: "Chamonix, France",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
    },
    {
      id: 5,
      title: "Extension Contemporaine",
      category: "Construction",
      location: "Genève, Suisse",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074"
    },
    {
      id: 6,
      title: "Hôtel Le Sommet",
      category: "Rénovation",
      location: "Courchevel, France",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
    }
  ];

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      
      {/* ── HEADER SECTION (FIXED & IMMERSIVE) ── */}
      <section className="relative h-[80vh] w-full flex items-center mb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')" }}
        >
          <div className="absolute inset-0 bg-black/60" /> {/* Overlay sombre pour le contraste */}
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-end gap-10">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#8B0000] font-bold tracking-[0.4em] uppercase text-xs mb-6"
            >
              Portfolio d'Excellence
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[8rem] font-light leading-[0.85] tracking-tighter text-white"
            >
              Nos <br />
              <span className="font-serif italic font-bold text-transparent bg-clip-text bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')",
                  WebkitBackgroundClip: "text",
                }}>
                Réalisations.
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:max-w-xs border-l-2 border-[#8B0000] pl-8 pb-4"
          >
            <p className="text-white/80 italic text-lg leading-relaxed">
              "Chaque projet est une réponse unique à un paysage et un mode de vie."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS SECTION ── */}
      <section className="container mx-auto px-6 lg:px-24 mb-16">
        <div className="flex flex-wrap gap-8 border-b border-gray-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative pb-2 ${
                filter === cat ? 'text-[#8B0000]' : 'text-gray-400 hover:text-black'
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter" 
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B0000]" 
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="container mx-auto px-6 lg:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-gray-100 rounded-sm">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-[1.2s] grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-6 left-6 overflow-hidden">
                    <div className="relative">
                        <span className="block bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
                        {project.category}
                        </span>
                        <span className="absolute top-0 left-0 bg-[#8B0000] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 w-full text-center">
                        Explorer
                        </span>
                    </div>
                  </div>

                  {/* Plus Icon Center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <Plus className="text-white" size={32} />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-8 flex justify-between items-end border-b border-gray-100 pb-6 transition-colors group-hover:border-[#8B0000]/30">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#8B0000] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-400 gap-2">
                      <MapPin size={14} className="text-[#8B0000]" />
                      <span className="text-[12px] uppercase tracking-[0.15em] font-medium">{project.location}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="container mx-auto px-6 lg:px-24 mb-24">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] text-white p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-10 rounded-sm relative overflow-hidden"
        >
          {/* Watermark Decoration */}
          <div className="absolute right-0 bottom-0 text-[12rem] font-black text-white/[0.03] translate-y-1/2 translate-x-1/4 pointer-events-none uppercase">
            Ideal
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight">Un projet de <br /><span className="font-serif italic text-[#8B0000] font-bold">construction ?</span></h2>
            <p className="text-white/50 text-lg max-w-md font-light">De la conception à la remise des clés, nous transformons votre vision en une réalité d'exception.</p>
          </div>
          
          <button className="relative z-10 bg-[#8B0000] hover:bg-white hover:text-[#8B0000] text-white px-12 py-5 font-bold uppercase tracking-widest text-[11px] transition-all duration-500 flex items-center gap-4 group">
            Parlons de votre projet 
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </section>

    </main>
  );
};

export default Projects;