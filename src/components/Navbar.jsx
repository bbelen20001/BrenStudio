
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Inicio',
    path: '/'
  }, {
    name: 'Planes',
    path: '/servicios'
  }, {
    name: 'Portafolio',
    path: '/portafolio'
  }, {
    name: 'Sobre Mí',
    path: '/sobre-mi'
  }, {
    name: 'Contacto',
    path: '/contacto'
  }];
  const isActive = path => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <motion.h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-poppins" whileHover={{
            scale: 1.05
          }} transition={{
            type: "spring",
            stiffness: 400
          }}>BrenStudio</motion.h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="relative group py-2">
                <motion.span className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-gray-900' : 'text-gray-500 group-hover:text-purple-600'}`}>
                  {link.name}
                </motion.span>
                {isActive(link.path) && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full" layoutId="underline" />}
              </Link>)}
              <Link to="/contacto">
                <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                  Empezar
                </button>
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.2
        }} className="fixed inset-0 top-16 bg-white z-40 md:hidden flex flex-col pt-8 px-6 pb-20 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`px-4 py-4 text-lg font-medium border-b border-gray-50 ${isActive(link.path) ? 'text-purple-600' : 'text-gray-800'}`}>
                    {link.name}
                  </Link>)}
                  <div className="pt-8">
                    <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg">
                        Solicitar Presupuesto
                      </button>
                    </Link>
                  </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </nav>;
}
export default Navbar;
