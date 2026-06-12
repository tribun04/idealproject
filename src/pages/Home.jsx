import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
    // Animation au scroll (Entrée par le bas)
    const fadeInVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <main className="overflow-x-hidden">
            
            {/* 1. SECTION HERO VIDEO */}
            <section className="relative h-screen w-full overflow-hidden">
                <video 
                    autoPlay muted loop playsInline 
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://www.archirodon.net/media/2agicbfx/hmpgvd.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay plus sombre pour lisibilité */}
                <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                    <motion.div 
                        initial="hidden" animate="visible" variants={fadeInVariant}
                        className="max-w-4xl"
                    >
                        <h1 className="text-white text-5xl md:text-7xl font-light leading-tight">
                            L'Excellence en Ingénierie <br />
                            <span className="font-bold text-[#8B0000]">& Construction.</span>
                        </h1>
                        <p className="text-white/80 text-xl mt-6 max-w-xl font-light">
                            Bâtir des infrastructures durables et relever les défis techniques les plus complexes à travers le monde.
                        </p>
                    </motion.div>
                </div>
                {/* Indicateur de défilement (Pagination) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
                    <div className="w-12 h-1 bg-[#8B0000]"></div>
                    <div className="w-12 h-1 bg-white/30"></div>
                </div>
            </section>

            {/* 2. DOMAINES D'EXPERTISE (Market Boxes) */}
            <section className="bg-white">
                <div className="py-16 text-center border-b border-gray-100">
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto px-6 font-medium">
                        Ideal Construction réalise des projets multidisciplinaires complexes couvrant les secteurs suivants :
                    </p>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap">
                    {[
                        { title: "Infrastructures Maritimes", img: "https://www.archirodon.net/media/3nhdpszl/marine_infrastructure_2.webp" },
                        { title: "Énergie & Renouvelables", img: "https://www.archirodon.net/media/gv5ebs4i/energy_hero.webp" },
                        { title: "Infrastructures Publiques", img: "https://www.archirodon.net/media/lxbjvhbc/government_services.webp" },
                        { title: "Dragage & Canalisations", img: "https://www.archirodon.net/media/berngyyr/dredging_pipelaying.webp" }
                    ].map((box, idx) => (
                        <div key={idx} className="relative group w-full md:w-1/2 lg:w-1/4 h-[550px] overflow-hidden cursor-pointer">
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${box.img})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-white text-2xl font-bold mb-4 leading-tight">{box.title}</h3>
                                <div className="h-1 w-12 bg-[#8B0000] mb-6 transition-all duration-500 group-hover:w-full"></div>
                                <button className="flex items-center text-white font-bold text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                                    <span className="mr-3">En savoir plus</span>
                                    <ArrowRight size={18} className="text-[#8B0000]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. APERÇU & STATISTIQUES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <motion.div 
                            initial="hidden" whileInView="visible" variants={fadeInVariant}
                            className="lg:w-1/2"
                        >
                            <h5 className="text-[#8B0000] font-bold tracking-[0.2em] uppercase mb-4 text-sm">Ideal Construction en bref</h5>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1.1]">
                                Nous bâtissons une culture où la « Santé & Sécurité » est ancrée dans notre ADN
                            </h2>
                            <p className="text-gray-600 text-lg italic border-l-4 border-[#8B0000] pl-6 py-2">
                                « IdealSafe » est notre plateforme de partage de connaissances et de responsabilité collective, soulignant l'importance vitale de la sécurité à tous les échelons de notre organisation.
                            </p>
                        </motion.div>
                        <div className="lg:w-1/2 w-full">
                           <div className="w-full h-80 bg-gray-100 flex items-center justify-center border border-gray-200 rounded-sm overflow-hidden relative">
                                <img src="https://www.archirodon.net/media/5oxp00p4/safety_first.jpg" alt="Sécurité" className="w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="bg-[#8B0000] text-white px-6 py-2 font-bold tracking-widest">SÉCURITÉ D'ABORD</span>
                                </div>
                           </div>
                        </div>
                    </div>

                    {/* Stats Swiper */}
                    <div className="mt-20">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 }
                            }}
                            autoplay={{ delay: 4000 }}
                            className="border-t border-gray-100 pt-12"
                        >
                            {[
                                { label: "Fondée en", val: "1959" },
                                { label: "Projets Réalisés", val: "350+" },
                                { label: "Collaborateurs", val: "10 000" },
                                { label: "Chiffre d'affaires Projets", val: "4 Mrd €" },
                                { label: "Pays d'Opération", val: "30" }
                            ].map((stat, i) => (
                                <SwiperSlide key={i}>
                                    <h4 className="text-gray-400 uppercase text-[10px] tracking-[0.2em] font-bold mb-3">{stat.label}</h4>
                                    <span className="text-4xl font-bold text-[#8B0000]">{stat.val}</span>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* 4. SLIDER PROJETS PHARES */}
            <section className="relative h-[800px] bg-black">
                <Swiper
                    modules={[EffectFade, Autoplay, Pagination]}
                    effect="fade"
                    loop
                    pagination={{ clickable: true }}
                    className="h-full"
                >
                    <SwiperSlide>
                        <div className="h-full w-full bg-cover bg-center flex items-center justify-center text-center px-6" style={{ backgroundImage: `url('https://www.archirodon.net/media/vvvnvxgo/hero.jpg')` }}>
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative z-10 max-w-5xl">
                                <h5 className="text-white/70 uppercase tracking-[0.3em] mb-6 text-sm">Infrastructure Maritime</h5>
                                <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 leading-tight">Pont Sheikh Zayed <br /> <span className="font-light italic text-3xl md:text-5xl">Abu Dhabi, Émirats</span></h2>
                                <button className="bg-[#8B0000] text-white px-10 py-5 font-bold flex items-center mx-auto hover:bg-white hover:text-black transition-all duration-300 group tracking-widest text-xs">
                                    DÉCOUVRIR LE PROJET <ArrowRight size={18} className="ml-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* 5. SECTION CARRIÈRE */}
            <section className="flex flex-col md:flex-row bg-[#f9f9f9]">
                <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
                    <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
                        <h3 className="text-[#8B0000] font-bold tracking-widest mb-4 uppercase text-sm">Rejoignez l'Aventure</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">Construisez votre <br />avenir avec nous</h2>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed max-w-md">
                            Intégrez une équipe internationale de professionnels passionnés et talentueux, prêts à relever des défis techniques majeurs et à repousser les limites de l'ingénierie.
                        </p>
                        <button className="bg-black text-white px-10 py-5 font-bold inline-flex items-center hover:bg-[#8B0000] transition-all tracking-widest text-xs">
                            VOIR NOS OPPORTUNITÉS <ArrowRight size={18} className="ml-4" />
                        </button>
                    </motion.div>
                </div>
                <div className="md:w-1/2 min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://www.archirodon.net/media/ptsng5eh/homepage_banner_career.webp')" }} />
            </section>

            {/* 6. DÉVELOPPEMENT DURABLE (PARALLAX) */}
            <section className="relative py-48 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-fixed bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://www.archirodon.net/media/liybyz4s/sustainability_hero.webp')" }}
                />
                <div className="absolute inset-0 bg-[#8B0000]/85" /> {/* Overlay de marque rouge */}
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
                        <h4 className="uppercase tracking-[0.4em] font-bold mb-6 text-sm">Développement Durable</h4>
                        <h2 className="text-6xl md:text-8xl font-serif italic mb-10 leading-none">Nous nous engageons.</h2>
                        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-90 mb-12 leading-relaxed">
                            Nos travaux s'inscrivent dans un cadre rigoureux de normes éthiques et environnementales visant à protéger notre planète et à bénéficier aux communautés locales.
                        </p>
                        <button className="bg-white text-[#8B0000] px-12 py-5 font-bold hover:bg-black hover:text-white transition-all tracking-widest text-xs uppercase">
                            Découvrir nos engagements
                        </button>
                    </motion.div>
                </div>
            </section>

        </main>
    );
};

export default Home;