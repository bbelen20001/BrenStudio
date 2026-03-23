import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Mail, Phone } from 'lucide-react';
function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [ {
    icon: Github,
    href: 'https://github.com/bbelen20001',
    label: 'GitHub'
  }, {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/brenda-belen-8772aa211/',
    label: 'LinkedIn'
  }, {
    icon: Mail,
    href: 'mailto:brendabelen273@gmail.com',
    label: 'Email'
  }];
  return <footer className="glass-effect mt-20 border-t border-white/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <span className="text-2xl font-bold gradient-text font-poppins">BrenStudio</span>
            <p className="text-gray-600 text-sm">
              Transformamos tus ideas en soluciones web profesionales y creativas.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-800 font-poppins">
              Contacto
            </span>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>brendabelen273@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+34 692 340 099</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-800 font-poppins">
              Síguenos
            </span>
            <div className="flex space-x-4">
              {socialLinks.map(social => <motion.a key={social.label} href={social.href} aria-label={social.label} className="p-2 rounded-lg bg-white/50 hover:bg-white transition-colors" whileHover={{
              scale: 1.1,
              rotate: 5
            }} whileTap={{
              scale: 0.95
            }}>
                  <social.icon className="w-5 h-5 text-gray-700" />
                </motion.a>)}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/30 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} BrenStudio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
}
export default Footer;