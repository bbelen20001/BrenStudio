import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import TechStack from '@/components/TechStack';
import ProcessStep from '@/components/ProcessStep';
import ProjectShowcase from '@/components/ProjectShowcase';
import PlanCard from '@/components/PlanCard';
import ContactCTA from '@/components/ContactCTA';
import CTASection from '@/components/CTASection';
function HomePage() {
  const steps = [{
    title: "Análisis",
    description: "Entendemos tu negocio y objetivos."
  }, {
    title: "Estrategia",
    description: "Planificamos la mejor solución técnica."
  }, {
    title: "Diseño",
    description: "Creamos una visual impactante y funcional."
  }, {
    title: "Desarrollo",
    description: "Construimos con código limpio y moderno."
  }, {
    title: "Revisión",
    description: "Afinamos detalles contigo."
  }, {
    title: "Publicación",
    description: "Lanzamos tu proyecto al mundo."
  }];
  return <MainLayout title="Inicio" description="Creamos páginas web y tiendas online profesionales para emprendedores y pymes.">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src="https://horizons-cdn.hostinger.com/3f93707d-78c2-4aa4-97e6-02625c623c2b/3094c7c910252599fd9c1ba874eb4e16-XwJpa.jpg" alt="Espacio de trabajo creativo y moderno" className="w-full h-full object-cover " />
   <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>




        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
          <motion.h1 className="text-4xl md:text-6xl font-bold font-poppins text-white leading-tight mb-8" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            Creamos páginas web y tiendas online profesionales para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">emprendedores y pymes</span> que quieren verse bien y vender online.
          </motion.h1>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <Link to="/servicios">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center">
                Ver tarifas
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link to="/contacto">
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all">
                Solicitar presupuesto
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust & Process Intro */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
        <SectionTitle title="Confían en un proceso claro y bien hecho" subtitle="Todo a la vista. Combino diseño estratégico con tecnología sólida para que tu web no solo sea bonita, sino que funcione como un reloj." />
          
          <div className="mt-12">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Tecnologías que utilizo</h3>
            <TechStack />
          </div>
        </div>
      </section>

      {/* 3. CTA Mid-Page */}
      <CTASection title="Tu web desde €800" subtitle="Calidad profesional a un precio accesible para arrancar con fuerza." />

      {/* 4. Projects Showcase */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <SectionTitle title="Algunos proyectos realizados" />
          </div>
          <ProjectShowcase />
          <div className="text-center mt-12">
            <Link to="/portafolio" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
              Ver portafolio completo <MoveRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Process Steps */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <SectionTitle title="Mi proceso de trabajo" subtitle="Paso a paso, construimos tu visión." />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, idx) => <ProcessStep key={idx} number={idx + 1} title={step.title} description={step.description} delay={idx * 0.1} />)}
          </div>
        </div>
      </section>

      {/* 6. Plans Preview */}
      <section className="py-24 px-6 bg-cream/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <SectionTitle title="Planes Simples" subtitle="Opciones claras para necesidades claras." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlanCard title="Página Web" price="€800" description="Presencia profesional para tu negocio." features={['Diseño a medida', 'Responsive', 'SEO Básico', 'Contacto']} delay={0} />
            <PlanCard title="Ecommerce" price="€1.200" description="Vende tus productos al mundo 24/7." features={['Catálogo ilimitado', 'Pasarela de pagos', 'Gestión pedidos']} image="https://images.unsplash.com/photo-1677693944335-178ba4f745d2" highlight={true} delay={0.2} />
            <PlanCard title="A Medida" price="Consultar" description="Soluciones complejas para retos únicos." features={['Funcionalidad avanzada', 'Integraciones API', 'Dashboard']} delay={0.4} />
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <ContactCTA />

    </MainLayout>;
}
export default HomePage;