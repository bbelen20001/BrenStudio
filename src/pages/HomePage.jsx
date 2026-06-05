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
  const steps = [
    { title: "Análisis", description: "Entendemos tu negocio y objetivos." },
    { title: "Estrategia", description: "Planificamos la mejor solución técnica." },
    { title: "Diseño", description: "Creamos una visual impactante y funcional." },
    { title: "Desarrollo", description: "Construimos con código limpio y moderno." },
    { title: "Revisión", description: "Afinamos detalles contigo." },
    { title: "Publicación", description: "Lanzamos tu proyecto al mundo." }
  ];

  return (
    <MainLayout 
      title="Inicio" 
      description="Creamos páginas web y tiendas online profesionales para emprendedores, pymes y empresas que quieren verse bien, atraer clientes y vender online."
    >
      {/* Forzado sutil de tipografía heredada únicamente para las familias de los títulos sin alterar tamaños */}
      <style>{`
        .serif-titles-harmony h1, 
        .serif-titles-harmony h2, 
        .serif-titles-harmony h3, 
        .serif-titles-harmony h4 { 
          font-family: Georgia, Cambria, "Times New Roman", Times, serif !important;
        }
      `}</style>

      <div className="serif-titles-harmony">
        
{/* 1. HERO SECTION - Ajuste de Contraste Profesional y Profundidad */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FBF9F6]">
  {/* Contenedor del fondo sin modos de fusión para mantener la viveza de la imagen */}
  <div className="absolute inset-0 z-0">
    <img 
      src="inicio.png" 
      alt="Espacio arquitectónico minimalista" 
      className="w-full h-full object-cover opacity-[0.55]" 
    />
    
    {/* Capa de contraste: Degradado radial suave desde el centro hacia los bordes 
        y un overlay sólido muy ligero para unificar los tonos */}
    <div className="absolute inset-0 bg-[#FBF9F6]/30"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F6]/80 via-transparent to-transparent"></div>
  </div>

  <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-36 space-y-8">
    <motion.p 
      className="text-[10px] uppercase tracking-[0.35em] text-[#A89486] font-medium"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
    >
      Bespoke Web Development & Identity
    </motion.p>
<motion.h1 
  className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#2C2520] leading-[1.35] tracking-tight max-w-4xl mx-auto" 
  initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }}
>
  Creamos la arquitectura digital de <br />
  {/* El terracota atardecer resalta con mucha fuerza y calidez */}
  <span className="font-serif italic font-medium text-[#A65D46] tracking-wide inline-block drop-shadow-sm">
    emprendedores, pymes y empresas
  </span> <br />
  que transforman su estética en resultados.
</motion.h1>

    <motion.div 
      className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8" 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
    >
      <Link to="/servicios" className="w-full sm:w-auto">
        <button className="w-full sm:w-auto px-9 py-4 bg-[#2C2520] text-[#FBF9F6] rounded-full font-sans font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#A89486] transition-all duration-500 ease-out shadow-sm">
          Ver tarifas →
        </button>
      </Link>
      <Link to="/contacto" className="w-full sm:w-auto">
        <button className="w-full sm:w-auto px-9 py-4 border border-[#2C2520]/30 text-[#2C2520] rounded-full font-sans font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#2C2520] hover:text-[#FBF9F6] transition-all duration-500 ease-out backdrop-blur-[1px]">
          Solicitar presupuesto
        </button>
      </Link>
    </motion.div>
  </div>
</section>

        {/* 2. Trust & Process Intro */}
        <section className="py-24 px-6 bg-card">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionTitle 
              title="Confían en un proceso claro y bien hecho" 
              subtitle="Todo a la vista. Combino diseño estratégico con tecnología sólida para que tu web no solo sea bonita, sino que funcione como un reloj." 
            />
            
            <div className="mt-16">
              <h3 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">
                Tecnologías que utilizo
              </h3>
              <TechStack />
            </div>
          </div>
        </section>

        {/* 3. CTA Mid-Page */}
        <CTASection title="Tu web desde €800" subtitle="Calidad profesional a un precio accesible para arrancar con fuerza." />

        {/* 4. Projects Showcase */}
        <section className="py-24 px-6 bg-background border-t border-b border-border/40">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <SectionTitle title="Algunos proyectos realizados" />
            </div>
            <ProjectShowcase />
            <div className="text-center mt-12">
              <Link to="/portafolio" className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-primary hover:text-accent transition-colors">
                Ver portafolio completo <MoveRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Process Steps */}
        <section className="py-24 px-6 bg-card">
          <div className="container mx-auto">
            <div className="mb-16 text-center">
              <SectionTitle title="Mi proceso de trabajo" subtitle="Paso a paso, construimos tu visión." />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {steps.map((step, idx) => (
                <ProcessStep 
                  key={idx} 
                  number={idx + 1} 
                  title={step.title} 
                  description={step.description} 
                  delay={idx * 0.1} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. Plans Preview - Con las imágenes coherentes de desarrollo web añadidas */}
        <section className="py-24 px-6 bg-secondary/30 border-t border-border/50">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <SectionTitle title="Planes Simples" subtitle="Opciones claras para necesidades claras." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PlanCard 
                title="Página Web" 
                price="€800" 
                description="Presencia profesional para tu negocio." 
                features={['Diseño a medida', 'Responsive', 'SEO Básico', 'Contacto']} 
                image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                delay={0} 
              />
              <PlanCard 
                title="Ecommerce" 
                price="€1.200" 
                description="Vende tus productos al mundo 24/7." 
                features={['Catálogo ilimitado', 'Pasarela de pagos', 'Gestión pedidos']} 
                image="https://images.unsplash.com/photo-1677693944335-178ba4f745d2" 
                highlight={true} 
                delay={0.2} 
              />
              <PlanCard 
                title="A Medida" 
                price="Consultar" 
                description="Soluciones complejas para retos únicos." 
                features={['Funcionalidad avanzada', 'Integraciones API', 'Dashboard']} 
                image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80"
                delay={0.4} 
              />
            </div>
          </div>
        </section>

        {/* 7. Contact CTA */}
        <ContactCTA />
      </div>
    </MainLayout>
  );
}

export default HomePage;