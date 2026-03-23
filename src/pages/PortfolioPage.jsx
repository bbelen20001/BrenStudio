import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Moderno',
      description: 'Tienda online completa con carrito de compras y pasarela de pago',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      technologies: ['React', 'TailwindCSS', 'Node.js', 'MongoDB'],
      category: 'Web',
      link: 'https://breangelbelen.pages.dev/',
    },
    {
      id: 2,
      title: 'App de Gestión de Tareas',
      description: 'Aplicación móvil para organizar proyectos y equipos',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      link: 'https://breangelbelen.pages.dev/',
    },
    {
      id: 3,
      title: 'Portafolio Creativo',
      description: 'Sitio web de portafolio para artista digital',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      technologies: ['React', 'Framer Motion', 'TailwindCSS'],
      category: 'Design',
      link: 'https://breangelbelen.pages.dev/',
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Panel de control con visualización de datos en tiempo real',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      technologies: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      category: 'Web',
      link: 'https://breangelbelen.pages.dev/',
    },
    {
      id: 5,
      title: 'Landing Page SaaS',
      description: 'Página de aterrizaje moderna para producto SaaS',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
      category: 'Design',
      link: 'https://breangelbelen.pages.dev/',
    },
  ];

  const categories = ['All', 'Web', 'Mobile', 'Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <MainLayout
      title="Portafolio"
      description="Explora nuestros proyectos de desarrollo web, aplicaciones móviles y diseño digital."
    >
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Nuestro Portafolio"
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
            <h3 className="text-3xl font-bold gradient-text mb-4 font-poppins">
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
    </MainLayout>
  );
}

export default PortfolioPage;