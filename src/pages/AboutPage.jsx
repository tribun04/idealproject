import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRight, Quote, Globe, ShieldCheck, Target, Eye } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const AboutUs = () => {
    const [activeSection, setActiveSection] = useState('section-1');

    const fadeInVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['section-1', 'section-2'];
            const scrollPosition = window.scrollY + 300;
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && scrollPosition >= el.offsetTop) setActiveSection(id);
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="overflow-x-hidden bg-white text-[#1A2337]">
            
            {/* 1. NAVIGATION LATÉRALE (Desktop) */}
            <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
                <nav className="flex flex-col space-y-10 border-l-2 border-gray-100 pl-6 relative">
                    <div 
                        className="absolute left-[-2px] w-[2px] bg-[#8B0000] transition-all duration-500" 
                        style={{ height: '20px', top: activeSection === 'section-1' ? '0px' : '65px' }} 
                    />
                    <a href="#section-1" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === 'section-1' ? 'text-[#8B0000]' : 'text-gray-300'}`}>
                        Entrepreneur EPC International
                    </a>
                    <a href="#section-2" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === 'section-2' ? 'text-[#8B0000]' : 'text-gray-300'}`}>
                        Mission, Vision & Valeurs
                    </a>
                </nav>
            </aside>

            {/* 2. SECTION HERO */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://www.archirodon.net/media/pfwlye3r/hero_company_1.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 container mx-auto px-6 lg:px-24">
                    <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                        <h5 className="text-[#8B0000] font-bold tracking-[0.3em] uppercase mb-4 text-sm">À Propos de Nous</h5>
                        <h1 className="text-white text-5xl md:text-7xl font-light">Ideal Construction</h1>
                    </motion.div>
                </div>
            </section>

            {/* 3. SECTION 1: ENTREPRENEUR EPC */}
            <section id="section-1" className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
                            className="lg:w-5/12"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight uppercase">Entrepreneur <br/>EPC International</h2>
                            <div className="relative pl-10">
                                <Quote className="absolute left-0 top-0 text-[#8B0000] opacity-20 w-8 h-8" />
                                <p className="text-xl italic text-gray-600 leading-relaxed">
                                    Ce qui nous distingue, au-delà de notre expertise, c'est l'<strong className="text-[#8B0000]">ethos</strong> et la persévérance de nos équipes qui s'efforcent de livrer des solutions innovantes.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
                            className="lg:w-7/12 text-gray-500 text-lg space-y-6 leading-relaxed"
                        >
                            <p>Ideal Construction est un entrepreneur EPC (Ingénierie, Approvisionnement et Construction) international engagé à bâtir un monde au futur durable.</p>
                            <p>Nous opérons à travers 3 continents avec une présence historique et significative en Europe, en Afrique et au Moyen-Orient.</p>
                            <p>Avec la Santé & Sécurité comme priorité absolue et la Qualité comme livrable intrinsèque, nous garantissons le succès de nos projets et le bien-être de nos collaborateurs.</p>
                        </motion.div>
                    </div>

                    {/* MARCHÉS ET EXPERTISE */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">
                        {[
                            { name: "Maritime & Infrastructure", icon: <Globe /> },
                            { name: "Énergie & Renouvelables", icon: <ShieldCheck /> },
                            { name: "Secteur Public", icon: <Target /> },
                            { name: "Dragage & Travaux", icon: <Eye /> }
                        ].map((item, idx) => (
                            <div key={idx} className="group border-b border-gray-100 pb-8 hover:border-[#8B0000] transition-all duration-500 cursor-default">
                                <div className="text-[#8B0000] mb-6 transition-transform group-hover:-translate-y-2">
                                    {React.cloneElement(item.icon, { size: 40, strokeWidth: 1.5 })}
                                </div>
                                <h6 className="font-bold text-gray-900 text-lg group-hover:text-[#8B0000] transition-colors uppercase">{item.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SECTION 2: MISSION & VISION */}
            <section id="section-2" className="bg-gray-50 py-24">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
                            <h5 className="text-[#8B0000] font-bold tracking-widest uppercase mb-4 text-sm">Mission, Vision & Valeurs</h5>
                            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">Le moteur de nos accomplissements et de notre excellence</h2>
                            <p className="text-gray-500 text-lg border-l-4 border-[#8B0000] pl-8">
                                Notre historique exceptionnel de projets réussis est intimement lié à la clarté de notre mission et à la force de nos valeurs.
                            </p>
                        </motion.div>
                        <div className="h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm">
                            <img src="https://www.archirodon.net/media/fr0d0rm1/mission_vision_values.jpg" className="w-full h-full object-cover" alt="Nos Valeurs" />
                        </div>
                    </div>

                    <div className="space-y-32">
                        <div className="flex flex-col lg:flex-row justify-between gap-12">
                            <h2 className="text-4xl font-bold lg:w-1/3 uppercase">Notre Mission</h2>
                            <p className="text-2xl font-light text-gray-600 lg:w-2/3 leading-snug">
                                Forts d'une réputation bâtie sur plus d'un demi-siècle, nous visons à créer de la valeur pour nos parties prenantes en exécutant des projets complexes et structurants à travers le monde.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-12">
                            <h2 className="text-4xl font-bold lg:w-1/3 uppercase">Notre Vision</h2>
                            <p className="text-2xl font-light text-gray-600 lg:w-2/3 leading-snug">
                                Devenir le partenaire privilégié de nos clients en atteignant des standards de performance supérieurs et en offrant des résultats durables pour les communautés et nos employés.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SECTION VALEURS "ETHOS" */}
            <section className="relative py-32 bg-[#1A2337] overflow-hidden text-white">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.03] pointer-events-none select-none uppercase">
                    ETHOS
                </span>
                <div className="relative z-10 container mx-auto px-6 lg:px-24">
                    <h2 className="text-5xl font-light mb-16">Nos Valeurs</h2>
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-4">
                            <p className="text-xl mb-12">Nos valeurs sont incarnées par le mot <span className="font-bold border-b-2 border-[#8B0000]">ethos</span>*</p>
                            {[
                                { title: "INTÉGRITÉ", desc: "Nous respectons nos principes moraux et éthiques envers toutes nos parties prenantes." },
                                { title: "TRANSPARENCE", desc: "Nous menons nos activités de manière ouverte et communiquons avec clarté." },
                                { title: "EXCELLENCE SSE", desc: "Zéro compromis concernant la santé, la sécurité et l'environnement." },
                                { title: "PASSION", desc: "Nous sommes passionnés par l'excellence et fiers de l'impact de nos réalisations." },
                                { title: "CAPITAL HUMAIN", desc: "Nos employés sont notre plus grand atout. Nous nous traitons avec respect." }
                            ].map((val, i) => (
                                <div key={i} className="group py-6 border-b border-white/10 hover:border-[#8B0000] transition-colors cursor-default">
                                    <h3 className="text-3xl font-light group-hover:text-[#8B0000] transition-colors">{val.title}</h3>
                                    <p className="max-w-md text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                                        {val.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-end lg:justify-end">
                            <div className="max-w-xs text-sm text-gray-400 italic">
                                <span className="text-[#8B0000] text-3xl block mb-2">*</span>
                                (Nom grec) signifiant "caractère", utilisé pour décrire les croyances ou les idéaux qui caractérisent une communauté.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CHIFFRES CLÉS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-24">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 }
                        }}
                        autoplay={{ delay: 3000 }}
                        className="border-t border-gray-200 pt-16"
                    >
                        {[
                            { label: "Fondée en", val: "1959" },
                            { label: "Projets Réalisés", val: "350+" },
                            { label: "Collaborateurs", val: "10 000" },
                            { label: "Pays d'Activité", val: "30+" }
                        ].map((stat, i) => (
                            <SwiperSlide key={i}>
                                <div className="border-l-2 border-gray-100 pl-8">
                                    <h4 className="text-gray-400 uppercase text-[10px] tracking-widest font-bold mb-2">{stat.label}</h4>
                                    <span className="text-5xl font-bold text-[#8B0000]">{stat.val}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* 7. MOT DE LA DIRECTION */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-start gap-16">
                    <div className="md:w-1/2">
                        <h5 className="text-[#8B0000] font-bold tracking-widest uppercase mb-4 text-sm">Leadership</h5>
                        <button className="group flex items-center text-4xl font-light text-gray-900 text-left">
                            Note de notre PDG <ArrowRight className="ml-4 text-[#8B0000] transition-transform group-hover:translate-x-2" />
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <h4 className="text-3xl font-light italic text-gray-500 leading-snug">
                            "Nous sommes guidés par les besoins du monde et nous nous engageons à aider les économies à croître durablement."
                        </h4>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AboutUs;