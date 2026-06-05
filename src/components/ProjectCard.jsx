import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom'; // O de tu sistema de rutas actual

// Recibimos todo el objeto del proyecto para poder pasarlo limpiamente
function ProjectCard(project) {
  const { image, title, description, technologies, id } = project;

  return (
    <motion.div
      className="glass-effect rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Capa Hover transformada en Link de enrutado interno */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <Link
            to={`/block/${id}`} // O '/proyectos/detalle' si decides cambiar la ruta
            state={{ project }} // Enviamos los datos del proyecto a la nueva vista
            className="flex items-center space-x-2 text-white font-semibold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 transition-transform active:scale-95"
          >
            <span>Ver Proyecto</span>
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-800 font-poppins">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;