import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers, LayoutGrid } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';

/**
 * DATA DE PROYECTOS
 * Nota: Todas las rutas de imágenes y videos empiezan con "/" porque están en la carpeta 'public'.
 */
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Portal Corporativo & Infraestructura TI',
    description: 'Rediseño web institucional para una empresa de telecomunicaciones y conectividad. Optimización de arquitectura de información y catálogo de soluciones técnicas B2B.',
    image: '/convergencia-networkingg.jpg', 
    technologies: ['React', 'TailwindCSS', 'Framer Motion'],
    category: 'Web',
    images: ['/convergentecap2.jpeg', '/convergentecap4.jpeg', '/convergentecap3.jpeg'] 
  },
  {
    id: 2,
    title: 'XDF Radar - Plataforma Cultural',
    description: 'Interfaz premium tipo magacín digital dedicada a la difusión de arte, música y cultura. Diseño inmersivo enfocado en el consumo de contenido multimedia adaptado a múltiples dispositivos.',
    image: '/xdf-radar.jpg', 
    video: '/videochino.mp4', // Asegúrate que el archivo esté en public/videochino.mp4
    technologies: ['React Native', 'Node.js', 'Redux'], 
    category: 'Mobile',
    images: ['/capturechino1.jpeg', '/capturechino2.jpeg', '/capturechino3.jpeg', '/capturechino4.jpeg']
  },
  {
    id: 3,
    title: 'Dake Experience - Landing & Catálogo',
    description: 'Plataforma interactiva para showrooms de cocinas de alta gama. Integra mapas de geolocalización de tiendas asociados y filtros dinámicos de catálogo de productos.',
    image: '/dake-experience.jpg', 
    technologies: ['React', 'TailwindCSS', 'Express', 'MongoDB'],
    category: 'Design',
    images: ['/dake-captura1.jpg', '/dake-captura2.jpg']
  },
  {
    id: 4,
    title: 'Trocar - Marketplace Móvil',
    description: 'Aplicación web móvil de economía colaborativa para artesanos y comercio local. Incluye carrito, gestión de tiendas express, agenda de eventos y feedback dinámico.',
    image: '/trocar-marketplace.jpg', 
     video: '/top.mp4',
    technologies: ['React', 'Firebase', 'Redux', 'TailwindCSS'], 
    category: 'Web', 
    images: ['/tops2.jpeg',]
  },
  {
    id: 5,
    title: 'Emerald Clean - Solución Wellness & Hogar',
    description: 'Plataforma de servicios de limpieza premium con enfoque en el bienestar familiar. Incluye sistema de reservas inteligente, tablas de precios dinámicas y una interfaz diseñada para transmitir paz y orden.',
    image: '/emerald-clean-hero.jpg', 
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    category: 'Design',
    images: ['/esmeral1.jpeg', '/esmeral2.jpeg', '/esmeral3.jpeg']
  }
];

function BlockPage() {
  const { id } = useParams();
  
  // Buscamos el proyecto por ID comparando como número
  const project = PROJECTS_DATA.find((p) => p.id === Number(id));

  // Pantalla de error si el proyecto no existe o el ID es inválido
  if (!project) {
    return (
      <MainLayout title="Proyecto no encontrado">
        <div className="text-center py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-gray-800">El proyecto no existe</h2>
            <p className="text-gray-500 mt-2 mb-6">La referencia que buscas no está disponible actualmente.</p>
            <Link 
              to="/portafolio" 
              className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Volver al Portafolio
            </Link>
          </motion.div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={project.title} description={project.description}>
      <div className="min-h-screen py-12 px-4 bg-gray-50/50">
        <div className="container mx-auto max-w-6xl space-y-8">
          
          {/* Navegación de regreso */}
          <Link 
            to={-1} 
            className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Volver a proyectos</span>
          </Link>

          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pt-4">
            
            {/* --- COLUMNA IZQUIERDA: DETALLES --- */}
            <motion.div 
              className="md:col-span-5 space-y-6 md:sticky md:top-24"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-3">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-purple-100 text-purple-700 inline-block">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-poppins leading-tight">
                  {project.title}
                </h1>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-500" />
                  Sobre el proyecto
                </h3>
                <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                  {project.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium rounded-md bg-white text-gray-700 border border-gray-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* --- COLUMNA DERECHA: MULTIMEDIA --- */}
            <motion.div 
              className="md:col-span-7 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Prioridad al Video si existe, sino Imagen de Portada */}
              {project.video ? (
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-black aspect-video flex items-center justify-center">
                  <video
                    src={project.video}
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    Tu navegador no soporta la reproducción de videos.
                  </video>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover max-h-[500px]"
                  />
                </div>
              )}

              {/* Galería de Capturas Secundarias */}
              {project.images && project.images.length > 0 && (
                <div className="space-y-6 pt-6">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <LayoutGrid className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Vistas de Interfaz y UI</span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8">
                    {project.images.map((imgUrl, idx) => (
                      <motion.div 
                        key={idx} 
                        className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img 
                          src={imgUrl} 
                          alt={`Captura de pantalla ${idx + 1} del proyecto ${project.title}`} 
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default BlockPage;