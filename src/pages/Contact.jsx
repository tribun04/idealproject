import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';


const ContactUs = () => {
    const formRef = useRef();
    const [activeSection, setActiveSection] = useState('section-1');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Animation variant
    const fadeInVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['section-1', 'section-2'];
            const scrollPosition = window.scrollY + 300;
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && scrollPosition >= el.offsetTop) {
                    setActiveSection(id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Envoi de l'email
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // --- REMPLACEZ ICI ---
        const SERVICE_ID = "service_hjfz4va"; 
        const TEMPLATE_ID = "template_panr283";
        const PUBLIC_KEY = "69e0CioBGif8akrIN";
        // ---------------------

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log("Success:", result.text);
                setIsSuccess(true);
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Erreur lors de l'envoi. Vérifiez vos clés EmailJS dans le code.");
                setIsSubmitting(false);
            });
    };

    return (
        <main className="overflow-x-hidden bg-white text-[#1A2337] pt-20">
            
            {/* NAVIGATION LATÉRALE */}
            <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
                <nav className="flex flex-col space-y-10 border-l-2 border-gray-100 pl-6 relative">
                    <div 
                        className="absolute left-[-2px] w-[2px] bg-[#8B0000] transition-all duration-500" 
                        style={{ height: '20px', top: activeSection === 'section-1' ? '0px' : '65px' }} 
                    />
                    <a href="#section-1" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === 'section-1' ? 'text-[#8B0000]' : 'text-gray-300'}`}>
                        Formulaire
                    </a>
                    <a href="#section-2" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === 'section-2' ? 'text-[#8B0000]' : 'text-gray-300'}`}>
                        Informations
                    </a>
                </nav>
            </aside>

            {/* HERO SECTION */}
            <section className="relative h-[40vh] w-full overflow-hidden flex items-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://www.archirodon.net/media/pfghevzr/contact-us_hero.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 container mx-auto px-6 lg:px-24">
                    <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                        <h5 className="text-[#8B0000] font-bold tracking-[0.3em] uppercase mb-4 text-sm">Contact</h5>
                        <h1 className="text-white text-5xl md:text-7xl font-light italic uppercase">Contactez-nous</h1>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 1: FORMULAIRE */}
            <section id="section-1" className="py-24">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="max-w-5xl mx-auto">
                        {isSuccess ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-gray-50 rounded-lg">
                                <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold mb-4 italic">Message Envoyé !</h3>
                                <p className="text-gray-500 mb-8">Nous reviendrons vers vous sous 24 à 48 heures.</p>
                                <button onClick={() => setIsSuccess(false)} className="bg-[#8B0000] text-white px-8 py-3 font-bold uppercase text-xs tracking-widest">
                                    Envoyer un autre message
                                </button>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={sendEmail} className="space-y-12">
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                    <div className="flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Prénom*</label>
                                        <input required type="text" name="firstName" className="py-3 outline-none bg-transparent" />
                                    </div>
                                    <div className="flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nom*</label>
                                        <input required type="text" name="lastName" className="py-3 outline-none bg-transparent" />
                                    </div>
                                    <div className="flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email*</label>
                                        <input required type="email" name="email" className="py-3 outline-none bg-transparent" />
                                    </div>
                                    <div className="flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Téléphone*</label>
                                        <input required type="tel" name="phone" className="py-3 outline-none bg-transparent" />
                                    </div>
                                    <div className="md:col-span-2 flex flex-col border-b border-gray-200 focus-within:border-[#8B0000] transition-colors">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Votre Message*</label>
                                        <textarea required name="message" rows="4" className="py-3 outline-none resize-none bg-transparent"></textarea>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                                    <p className="text-[10px] text-gray-400 uppercase italic">* Tous les champs sont obligatoires</p>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="bg-[#8B0000] text-white px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all flex items-center disabled:opacity-50"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : 'Envoyer le message'}
                                        {!isSubmitting && <ArrowRight size={18} className="ml-3" />}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* SECTION 2: INFO */}
            <section id="section-2" className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 lg:px-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="border-t-2 border-[#8B0000] pt-8 bg-white p-10">
                            <h4 className="text-xl font-bold mb-6 italic">Siège Social</h4>
                            <div className="space-y-4 text-gray-500">
                                <p className="flex items-center gap-3"><MapPin size={18} className="text-[#8B0000]" /> 123 Ave de la Construction, France</p>
                                <p className="flex items-center gap-3"><Phone size={18} className="text-[#8B0000]" /> +33 4 00 00 00 00</p>
                                <p className="flex items-center gap-3"><Mail size={18} className="text-[#8B0000]" /> contact@ideal-construction.fr</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUs;