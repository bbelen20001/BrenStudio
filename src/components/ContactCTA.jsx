
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactCTA() {
  return (
    <section className="py-20 px-4 bg-cream/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Estoy aquí para escuchar tus ideas y convertirlas en realidad. 
              Sin tecnicismos complicados, solo soluciones claras.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-purple-600" />
                <span>Barcelona, España (Disponible Remoto)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-purple-600" />
                <a href="mailto:brendabelen273@gmail.com" className="hover:text-purple-600 transition-colors">brendabelen273@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/*<a href="#" className="flex-1 text-center px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> Programar reunión
              </a>*/}
              <Link to="/contacto" className="flex-1 text-center px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-xl font-medium hover:border-purple-400 hover:text-purple-600 transition-all">
                Enviar mensaje
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1690192079529-9fd57e5b24d0" 
              alt="Reunión creativa de trabajo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
