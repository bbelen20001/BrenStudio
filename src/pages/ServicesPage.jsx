
import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import PlanCard from '@/components/PlanCard';
import ContactCTA from '@/components/ContactCTA';

function ServicesPage() {
  const plans = [
    {
      title: 'Página Web Profesional',
      price: 'Desde €800',
      description: 'Ideal para autónomos y pequeñas empresas que necesitan establecer su marca digital.',
      features: [
        'Diseño visual personalizado',
        'Hasta 5 secciones (Inicio, Nosotros, Servicios...)',
        'Diseño Responsive (Móvil, Tablet, Desktop)',
        'Optimización SEO Básica (Google)',
        'Formulario de contacto funcional',
        'Integración con Redes Sociales',
        'Certificado SSL de seguridad',
        'Dominio y hosting (asesoría)'
      ],
      highlight: false
    },
    {
      title: 'Ecommerce Completo',
      price: 'Desde €1.200',
      description: 'Tu tienda abierta 24/7. Gestión total de productos y ventas automatizadas.',
      features: [
        'Todo lo incluido en Web Profesional',
        'Tienda Online (Shopify / WooCommerce)',
        'Carga ilimitada de productos',
        'Pasarelas de pago (Stripe, PayPal, Tarjeta)',
        'Carrito de compras y Checkout',
        'Panel de administración fácil',
        'Gestión de inventario y envíos',
        'Formación de uso (2 horas)'
      ],
      highlight: true,
      image: "https://images.unsplash.com/photo-1677693944335-178ba4f745d2"
    },
    {
      title: 'Desarrollo a Medida',
      price: 'Consultar',
      description: 'Para proyectos que requieren funcionalidades específicas fuera de lo estándar.',
      features: [
        'Aplicaciones Web (React / Node.js)',
        'Plataformas de gestión interna',
        'Integración con APIs externas',
        'Bases de datos personalizadas',
        'Sistemas de reservas complejos',
        'Áreas privadas de clientes',
        'Mantenimiento evolutivo',
        'Consultoría técnica dedicada'
      ],
      highlight: false
    }
  ];

  return (
    <MainLayout
      title="Planes y Paquetes"
      description="Elige el plan que mejor se adapte a tu negocio. Precios claros y resultados profesionales."
    >
      <div className="bg-gradient-to-b from-cream via-white to-gray-50 pt-20 pb-10">
        <div className="container mx-auto px-4 text-center max-w-4xl mb-16">
          <SectionTitle 
            title="Planes y Paquetes" 
            subtitle="Inversiones claras para resultados tangibles. Sin letra pequeña." 
            centered={true}
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlight={plan.highlight}
                image={plan.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-6 font-poppins">¿Qué incluyen todos mis trabajos?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
             {[
               "Código optimizado", "Velocidad de carga", "Seguridad SSL",
               "Diseño Responsive", "Asesoría inicial", "Soporte post-lanzamiento"
             ].map((item, i) => (
               <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
                 <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                 <span className="font-medium text-gray-700">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </MainLayout>
  );
}

export default ServicesPage;
