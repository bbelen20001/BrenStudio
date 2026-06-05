import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Portal Corporativo & Infraestructura TI',
      description: 'Rediseño web institucional para una empresa de telecomunicaciones y conectividad. Optimización de arquitectura de información y catálogo de soluciones técnicas B2B.',
      image: 'convergencia-networkingg.jpg', 
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
      category: 'Web',
    },
    {
      id: 2,
      title: 'XDF Radar - Plataforma Cultural',
      description: 'Interfaz premium tipo magacín digital dedicada a la difusión de arte, música y cultura. Diseño inmersivo enfocado en el consumo de contenido multimedia adaptado a múltiples dispositivos.',
      image: 'xdf-radar.jpg', 
      technologies: ['React Native', 'Node.js', 'Redux'], 
      category: 'Mobile',
    },
    {
      id: 3,
      title: 'Dake Experience - Landing & Catálogo',
      description: 'Plataforma interactiva para showrooms de cocinas de alta gama. Integra mapas de geolocalización de tiendas asociados y filtros dinámicos de catálogo de productos.',
      image: 'dake-experience.jpg', 
      technologies: ['React', 'TailwindCSS', 'Express', 'MongoDB'],
      category: 'Design',
    },
    {
      id: 4,
      title: 'Trocar - Marketplace Móvil',
      description: 'Aplicación web móvil de economía colaborativa para artesanos y comercio local. Incluye carrito, gestión de tiendas express, agenda de eventos y feedback dinámico.',
      image: 'trocar-marketplace.jpg', 
      technologies: ['React', 'Firebase', 'Redux', 'TailwindCSS'], 
      category: 'Web', 
    },
    {
      id: 5,
      title: 'Emerald Clean - Solución Wellness & Hogar',
      description: 'Plataforma de servicios de limpieza premium con enfoque en el bienestar familiar. Incluye sistema de reservas inteligente, tablas de precios dinámicas y una interfaz diseñada para transmitir paz y orden.',
      mainImage: 'emerald-clean-portada.jpg',
      image: 'emerald-clean-hero.jpg', 
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
      category: 'Design',
    }
  ];

  const categories = ['All', 'Web', 'Mobile', 'Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <MainLayout
      title="Proyectos"
      description="Explora nuestros proyectos de desarrollo web, aplicaciones móviles y diseño digital."
    >
      {/* Forzado de tipografía heredada para títulos internos sin alterar sus dimensiones de tamaño */}
      <style>{`
        .serif-titles-harmony h1, 
        .serif-titles-harmony h2, 
        .serif-titles-harmony h3, 
        .serif-titles-harmony h4 { 
          font-family: Georgia, Cambria, "Times New Roman", Times, serif !important;
        }
      `}</style>

      <div className="serif-titles-harmony">
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <SectionTitle
              title="Proyectos Destacados"
              subtitle="Proyectos que reflejan nuestra pasión por el desarrollo y el diseño"
            />

            {/* Filter Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
                      : 'glass-effect text-gray-700 hover:bg-white/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              layout
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-600 text-lg">
                  No hay proyectos en esta categoría aún.
                </p>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              className="mt-20 glass-effect rounded-2xl p-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Removido font-poppins para mantener la consistencia con el diseño de BrenStudio */}
              <h3 className="text-3xl font-bold gradient-text mb-4">
                ¿Listo para crear algo increíble juntos?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Hablemos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos.
              </p>
              <a href="/contacto">
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Iniciar un Proyecto
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PortfolioPage;