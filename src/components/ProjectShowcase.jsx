
import React from 'react';
import { motion } from 'framer-motion';

function ProjectShowcase() {
  const projects = [
    {
      title: "Landing Page Profesional",
      category: "Diseño Web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d", // Example placeholder from Unsplash
      description: "Página de alto impacto para captura de leads."
    },

    {
      title: "Web Corporativa",
      category: "Negocios",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", // Example placeholder
      description: "Sitio completo con gestión de contenidos y blog."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-[4/3]"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-purple-300 text-sm font-medium mb-1">{project.category}</span>
            <h3 className="text-white text-xl font-bold font-poppins">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectShowcase;
