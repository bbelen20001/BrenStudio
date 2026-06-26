import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' }, 
    { name: 'Servicios', path: '/servicios' }, 
    { name: 'Proyectos', path: '/portafolio' },
    { name: 'block', path: '/block', hideMenu: true },
    { name: 'Sobre Mí', path: '/sobre-mi' }, 
    { name: 'Contacto', path: '/contacto' }
  ];

  const isActive = path => location.pathname === path;

  return (
    /* 🚀 Z-INDEX CRÍTICO: Se sube a 100 para garantizar que nada lo tape en móvil */
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-[110]">
            <motion.h1 
              className="text-2xl font-serif font-semibold text-primary tracking-wide" 
              whileHover={{ scale: 1.02 }} 
            >
              BrenStudio
            </motion.h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks
              .filter(link => !link.hideMenu)
              .map(link => (
                <Link key={link.path} to={link.path} className="relative group py-2">
                  <motion.span className={`text-[11px] uppercase tracking-widest transition-colors ${isActive(link.path) ? 'text-primary font-semibold' : 'text-muted-foreground group-hover:text-accent'}`}>
                    {link.name}
                  </motion.span>
                  {isActive(link.path) && (
                    <motion.div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent rounded-full" layoutId="underline" />
                  )}
                </Link>
              ))}
            <Link to="/contacto">
              <button className="ml-4 px-6 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-wider rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all">
                Empezar
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button - Z-index extra para estar sobre el overlay */}
          <button 
            className="md:hidden p-2 rounded-lg z-[110] text-primary" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: '100%' }} 
              transition={{ type: "spring", damping: 25, stiffness: 200 }} 
              /* 🛠️ SOLUCIÓN: Pantalla completa, posición fija y z-index superior */
              className="fixed inset-0 h-screen bg-card z-[100] md:hidden flex flex-col pt-24 px-8 pb-10"
            >
              <div className="flex flex-col space-y-4">
                {navLinks
                  .filter(link => !link.hideMenu)
                  .map(link => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      onClick={() => setIsMenuOpen(false)} 
                      className={`py-4 text-sm uppercase tracking-[0.2em] border-b border-border/40 transition-colors ${isActive(link.path) ? 'text-accent font-bold' : 'text-primary/70'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                
                <div className="mt-auto pt-10">
                  <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold rounded-xl shadow-xl active:bg-secondary active:text-secondary-foreground">
                      Solicitar Presupuesto
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;