import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ArrowRight, Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, title: 'À Propos', path: '/About', links: [] },
    { 
      id: 3, 
      title: 'Services', 
      path: '/services', 
      links: ['Rénovation', 'Éco-responsable', 'Construction', 'Aménagement'] 
    },
    { id: 0, title: 'Projets', path: '/Projects', links: [] },
    { id: 4, title: 'Contact', path: '/contact', links: [] },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (e, item) => {
    if (item.links && item.links.length > 0) {
      e.preventDefault();
      setActiveSubmenu(activeSubmenu === item.id ? null : item.id);
    } else {
      setActiveSubmenu(null);
      navigate(item.path);
    }
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled || activeSubmenu !== null ? 'bg-[#8B0000] py-2 shadow-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={() => setActiveSubmenu(null)}>
                <img 
                  // SWITCH LOGO SOURCE HERE
                  src={isScrolled || activeSubmenu !== null ? "../whitelogo.png" : "../logo.png"} 
                  alt="Ideal Construction Logo" 
                  className={`transition-all duration-500 ${isScrolled || activeSubmenu !== null ? 'h-12' : 'h-16'}`}
                />
              </Link>
            </div>

            {/* NAVIGATION DESKTOP */}
            <div className="flex flex-col items-end">
              <nav className="hidden lg:block">
                <ul className="flex space-x-10">
                  {menuItems.map((item) => (
                    <li key={item.id} className="relative">
                      <button 
                        onClick={(e) => handleMenuClick(e, item)}
                        className={`text-white font-bold uppercase text-[11px] tracking-[0.3em] py-4 border-b-2 flex items-center gap-2 transition-all ${
                          activeSubmenu === item.id ? 'border-white' : 'border-transparent hover:border-white/50'
                        }`}
                      >
                        {item.title}
                        {item.links.length > 0 && (
                          <ChevronDown size={14} className={`transition-transform ${activeSubmenu === item.id ? 'rotate-180' : ''}`} />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* MEGA MENU */}
        <div 
          className={`absolute left-0 w-full bg-[#660000] transition-all duration-500 ease-in-out overflow-hidden shadow-2xl ${
            activeSubmenu !== null ? 'max-h-[500px] opacity-100 border-t border-white/10' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-6 py-16">
            <div className="flex">
              <div className="w-1/3 border-r border-white/10 pr-12">
                <h6 className="text-white/40 uppercase text-[10px] tracking-widest mb-4">Notre Expertise</h6>
                <h2 className="text-white text-4xl font-serif italic mb-6 leading-tight">
                  {menuItems.find(i => i.id === activeSubmenu)?.title === 'Services' ? 'Ingénierie & Construction' : 'À découvrir'}
                </h2>
                <button 
                  onClick={() => navigate('/services')}
                  className="group bg-black text-white px-8 py-3 flex items-center font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  VOIR TOUS NOS SERVICES <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              
              <div className="w-2/3 pl-12 grid grid-cols-2 gap-x-12 gap-y-2">
                {menuItems.find(i => i.id === activeSubmenu)?.links.map((link, idx) => (
                  <Link 
                    key={idx} 
                    to={`/services/${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                    onClick={() => setActiveSubmenu(null)}
                    className="text-white text-lg font-bold flex justify-between items-center py-4 border-b border-white/5 hover:pl-4 transition-all duration-300"
                  >
                    {link} <ArrowRight size={16} className="opacity-30" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#8B0000] z-[60] transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8">
            <div className="flex justify-between items-center mb-16">
                <img src="../whitelogo.png" alt="Logo" className="h-[5rem]" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                    <X size={40} />
                </button>
            </div>
            <nav className="flex flex-col space-y-8">
                {menuItems.map(item => (
                    <Link 
                      key={item.id}   
                      to={item.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-4xl font-bold uppercase border-b border-white/10 pb-4"
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
         </div>
      </div>
    </>
  );
};

export default Header;