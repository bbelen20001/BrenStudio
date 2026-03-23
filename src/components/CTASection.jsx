
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function CTASection({ 
  title = "Tu web profesional desde 800€", 
  subtitle = "No dejes pasar más oportunidades. Da el salto digital hoy mismo.",
  primaryAction = { text: "Solicitar presupuesto", link: "/contacto" },
  secondaryAction = { text: "Ver tarifas", link: "/servicios" }
}) {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl mx-4 md:mx-12 text-center text-white relative overflow-hidden my-20">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <motion.div 
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">{title}</h2>
        <p className="text-xl text-purple-100 mb-10 font-light">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryAction.link}>
            <button className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center">
              {primaryAction.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
          <Link to={secondaryAction.link}>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all">
              {secondaryAction.text}
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CTASection;
