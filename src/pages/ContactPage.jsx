import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Instagram, Github, Linkedin } from 'lucide-react';
import emailjs from "emailjs-com";


function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    toast({
      title: "Error",
      description: "Por favor completa todos los campos",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_oesumt8",
      "template_bxwfzzh",
      formData,
      "E6cdhaaTeAKX4fTst"
    );

    toast({
      title: "¡Mensaje enviado! 🎉",
      description: "Te contactaremos pronto.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    toast({
      title: "Error",
      description: "No se pudo enviar el mensaje",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'brendabelen273@gmail.com',
      link: 'mailto:brendabelen273@gmail.com',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+34 692 340 099',
      link: 'https://wa.me/34692340099?text=Hola, quiero consultar sobre un proyecto web.',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Disponible para proyectos remotos',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-pink-500 to-purple-500' },
    { icon: Github, href: 'https://github.com/bbelen20001', label: 'GitHub', color: 'from-gray-700 to-gray-900' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/brenda-belen-8772aa211/', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
  ];

  return (
    <MainLayout
      title="Contacto"
      description="Ponte en contacto con Breángel Studio para discutir tu proyecto de desarrollo web."
    >
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Hablemos de tu Proyecto"
            subtitle="Estoy aquí para ayudarte a hacer realidad tus ideas"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Contact Form */}
            <motion.div
              className="glass-effect rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-6 font-poppins">
                Envíame un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all bg-white text-gray-900"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all bg-white text-gray-900"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all bg-white text-gray-900"
                    placeholder="¿Sobre qué quieres hablar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none bg-white text-gray-900"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white py-6 rounded-lg font-semibold text-lg shadow-lg transition-all"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-6 font-poppins">
                  Información de Contacto
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="glass-effect rounded-xl p-6 flex items-start space-x-4"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-3 rounded-full bg-gradient-to-r from-pink-200 to-purple-200">
                        <info.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-purple-600 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-6 font-poppins">
                  Sígueme en Redes
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass-effect rounded-xl p-6 flex flex-col items-center justify-center space-y-2 group`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${social.color}`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Notice */}
              <motion.div
                className="glass-effect rounded-xl p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="font-semibold text-gray-800 mb-2">Disponibilidad</h4>
                <p className="text-gray-600 text-sm">
                  Respondo a todos los mensajes en un plazo de 24-48 horas. Para consultas urgentes, 
                  contáctame por WhatsApp.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ContactPage;