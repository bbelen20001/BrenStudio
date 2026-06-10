import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Burbuja de mensaje (animada) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 mb-2 w-64 text-sm text-[#2C2520] font-sans"
          >
            <p className="font-semibold mb-1">¿Necesitas ayuda?</p>
            <p className="opacity-80">Estoy en línea para asesorarte con tu proyecto.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón dinámico con pulso */}
      <motion.a
        href="https://wa.me/34692340099?text=Hola, quiero consultar sobre un proyecto web."
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors relative flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
        {/* Efecto de pulso (animación) */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;