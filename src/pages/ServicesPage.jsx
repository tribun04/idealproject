import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Landmark, HardHat, Zap, Quote } from "lucide-react";

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  };

  const epcServices = [
    {
      id: "01",
      title: "Ingénierie",
      icon: <Ruler className="w-8 h-8" />,
      desc: "Nous possédons un arsenal de logiciels de modélisation et de conception de pointe, complétés par des outils développés en interne.",
      path: "/services/ingenierie"
    },
    {
      id: "02",
      title: "Achats (Procurement)",
      icon: <Landmark className="w-8 h-8" />,
      desc: "Notre équipe mondiale d'experts en approvisionnement soutient nos projets partout dans le monde en tant qu'experts stratégiques.",
      path: "/services/achats"
    },
    {
      id: "03",
      title: "Construction",
      icon: <HardHat className="w-8 h-8" />,
      desc: "Nos capacités d'exécution, alliées au savoir-faire technique, offrent des solutions innovantes, adaptées et rentables.",
      path: "/services/construction"
    },
    {
      id: "04",
      title: "Développement & Financement",
      icon: <Zap className="w-8 h-8" />,
      desc: "Nous intervenons dans le développement privé de projets d'infrastructure liés aux énergies renouvelables et au traitement des déchets.",
      path: "/services/developpement"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#bc0108] selection:text-white ">
      
      {/* 1. HERO SECTION (Intro Banner) */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-stone-900">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://www.archirodon.net/media/043fj531/services_hero-1.webp')" }}
        />
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold block mb-6">Services</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight">
              Approche <br />
              <span className="italic text-[#bc0108]">EPC Intégrée.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION (Two Column Text Widget) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div {...fadeInUp} className="lg:col-span-5 border-l-2 border-[#bc0108] pl-8">
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                Nos services <br /> EPC
              </h2>
            </motion.div>
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <h4 className="text-2xl font-light text-stone-500 leading-relaxed italic">
                "Nous couvrons l'ensemble des services requis à toutes les étapes du cycle de vie d'un projet, de l'ingénierie conceptuelle à la mise en service et l'exploitation."
              </h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID (Pillars) */}
      <section className="pb-32 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid md:grid-cols-2 gap-px bg-stone-100 border border-stone-100 shadow-2xl">
            {epcServices.map((service, idx) => (
              <motion.div 
                {...fadeInUp}
                key={service.id} 
                className="bg-white p-12 lg:p-20 group hover:bg-stone-50 transition-all duration-700"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="text-stone-300 group-hover:text-[#bc0108] transition-colors duration-500 transform group-hover:scale-110">
                      {service.icon}
                    </div>
                    <span className="text-6xl font-serif italic text-stone-100 group-hover:text-[#bc0108]/10 transition-colors duration-700">
                      {service.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-stone-900 group-hover:text-[#bc0108] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-stone-500 font-light leading-loose mb-12 flex-grow">
                    {service.desc}
                  </p>

                  <Link 
                    to={service.path}
                    className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-[#bc0108] group-hover:translate-x-3 transition-transform"
                  >
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOTE WIDGET (Projects Call to Action) */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#bc0108] text-[10px] tracking-[0.5em] uppercase font-bold block mb-4">Réalisations</span>
              <Link to="/projets" className="group flex items-center gap-6 text-4xl font-serif text-stone-900">
                <span>Projets Vedettes</span>
                <div className="p-4 rounded-full border border-stone-200 group-hover:bg-[#bc0108] group-hover:text-white transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="relative pl-10">
                <Quote className="absolute left-0 top-0 text-stone-200 w-8 h-8" />
                <p className="text-xl font-light text-stone-400 leading-relaxed italic">
                  Découvrez l'étendue et les points forts de nos projets majeurs à travers nos 4 marchés d'expertise : Marine, Énergie, Infrastructure Gouvernementale et Dragage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL IMAGE (Visual Placeholder like imageWidget) */}
      <section className="w-full h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000" 
          className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-1000"
          alt="Site Construction"
        />
      </section>

    </div>
  );
};

export default Services;