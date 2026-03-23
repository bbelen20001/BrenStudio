import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

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
      </div>
    </>
  );
}

export default MainLayout;