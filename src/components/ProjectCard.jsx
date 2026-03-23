import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ image, title, description, technologies, link }) {
  return (
    <motion.div
      className="glass-effect rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white font-semibold"
          >
            <span>Ver Proyecto</span>
            <ExternalLink className="w-4 h-4" />
          </a>
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