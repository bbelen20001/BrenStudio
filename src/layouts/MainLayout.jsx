import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

"use client";
import { Bubble } from '@typebot.io/nextjs';

function MainLayout({ children, title, description }) {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} - Breángel Studio` : 'Breángel Studio - Desarrollo Web Profesional'}</title>
        <meta name="description" content={description || 'Transformamos tus ideas en soluciones web profesionales. Creación de páginas web, portafolios, hosting y mantenimiento.'} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
  <Bubble
      typebot="faq-5zrmi74"
      theme={{
        
        button: { backgroundColor: "#A65D46", iconColor: "#FBF9F6" },
        chatWindow: { backgroundColor: "#FBF9F6" },
        // Intentamos forzar la ocultación del footer interno
        customCss: `
          .typebot-footer {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        `
      }}
    />
      </div>
   
    </>
  );
}

export default MainLayout;