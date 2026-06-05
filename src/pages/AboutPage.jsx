import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { Code, Palette, Zap, Heart } from 'lucide-react';

function AboutPage() {
  const skills = ['React', 'JavaScript', 'TailwindCSS', 'Node.js', 'MongoDB', 'Express', 'Framer Motion', 'Git', 'Responsive Design', 'SEO', 'UI/UX Design', 'API Integration'];
  const timeline = [{
    year: '2024',
    title: 'Fundación de BrenStudio',
    description: 'Inicio de servicios profesionales de desarrollo web bajo nueva identidad'
  }, {
    year: '2023',
    title: 'Especialización en React',
    description: 'Desarrollo de aplicaciones web modernas y escalables'
  }, {
    year: '2022',
    title: 'Primeros Proyectos Freelance',
    description: 'Construcción de portafolios y sitios web para clientes'
  }, {
    year: '2021',
    title: 'Inicio en Desarrollo Web',
    description: 'Aprendizaje de HTML, CSS, JavaScript y frameworks modernos'
  }];

  return (
    <MainLayout title="Sobre Mí" description="Conoce a Brenda Belen, desarrolladora web apasionada por crear soluciones digitales innovadoras en BrenStudio.">
      {/* Forzado sutil de tipografía heredada únicamente para las familias de los títulos sin alterar sus dimensiones */}
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
            {/* Hero Section */}
            <motion.div className="flex flex-col md:flex-row items-center gap-12 mb-20" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.8
            }}>
              <motion.div className="w-full md:w-1/2" initial={{
                x: -50,
                opacity: 0
              }} animate={{
                x: 0,
                opacity: 1
              }} transition={{
                duration: 0.8,
                delay: 0.2
              }}>
                <div className="relative">
                  <img src="pose2.png" alt="Brenda Belen" className="rounded-2xl shadow-2xl w-full h-[700px] object-cover" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br "></div>
                </div>
              </motion.div>

              <motion.div className="w-full md:w-1/2 space-y-6" initial={{
                x: 50,
                opacity: 0
              }} animate={{
                x: 0,
                opacity: 1
              }} transition={{
                duration: 0.8,
                delay: 0.4
              }}>
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                  {/* Removido font-poppins para heredar la tipografía unificada */}
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                    Hola, soy Brenda Belen
                  </h1>

                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Soy desarrolladora web y fundadora de <strong>BrenStudio</strong>, apasionada por crear experiencias digitales únicas y funcionales.
                    Con experiencia en desarrollo frontend y backend, me especializo en transformar ideas en
                    soluciones web profesionales que impulsan negocios y proyectos personales.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Mi enfoque se centra en la calidad, la creatividad y la atención al detalle. Cada proyecto
                    es una oportunidad para crear algo especial que no solo se vea bien, sino que también
                    funcione perfectamente.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  {[{
                    icon: Code,
                    text: 'Clean Code'
                  }, {
                    icon: Palette,
                    text: 'Diseño Creativo'
                  }, {
                    icon: Zap,
                    text: 'Alto Rendimiento'
                  }, {
                    icon: Heart,
                    text: 'Pasión por Detalles'
                  }].map((item, index) => (
                    <motion.div key={index} className="flex flex-col items-center text-center" whileHover={{
                      scale: 1.1
                    }}>
                      <div className="p-3 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 mb-2">
                        <item.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="text-xs text-gray-600 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <div className="mb-20">
              <SectionTitle title="Habilidades y Tecnologías" subtitle="Herramientas y lenguajes con los que trabajo" />

              <motion.div className="flex flex-wrap justify-center gap-4 mt-12" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }}>
                {skills.map((skill, index) => (
                  <motion.div key={index} className="px-6 py-3 glass-effect rounded-full font-semibold text-gray-700" initial={{
                    opacity: 0,
                    scale: 0.5
                  }} whileInView={{
                    opacity: 1,
                    scale: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.3,
                    delay: index * 0.05
                  }} whileHover={{
                    scale: 1.1,
                    y: -5
                  }}>
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Timeline Section */}
            <div>
              <SectionTitle title="Mi Trayectoria" subtitle="El camino que me ha llevado hasta aquí" />

              <div className="mt-12 max-w-3xl mx-auto">
                {timeline.map((item, index) => (
                  <motion.div key={index} className="relative pl-8 pb-12 border-l-2 border-purple-300 last:pb-0" initial={{
                    opacity: 0,
                    x: -50
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.6,
                    delay: index * 0.1
                  }}>
                    <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-gradient-to-r from-pink-400 to-purple-400"></div>
                    <div className="glass-effect rounded-xl p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 text-sm font-semibold mb-2">
                        {item.year}
                      </span>
                      {/* Removido font-poppins para mantener la consistencia formal */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div className="mt-20 glass-effect rounded-2xl p-12 text-center" initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
              {/* Removido font-poppins del encabezado inferior */}
              <h3 className="text-3xl font-bold gradient-text mb-4">
                ¿Trabajamos juntos?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Estoy siempre abierta a nuevos proyectos y colaboraciones. Si tienes una idea, hablemos.
              </p>
              <a href="/contacto">
                <motion.button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-lg" whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }} whileTap={{
                  scale: 0.95
                }}>
                  Ponte en Contacto
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;