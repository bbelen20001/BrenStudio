import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from './GradientButton';
import { useToast } from '@/components/ui/use-toast';

function ServiceCard({ icon: Icon, title, description, price, features }) {
  const { toast } = useToast();

  const handleContract = () => {
    toast({
      title: "¡Genial! 🎉",
      description: "🚧 Esta función no está implementada aún—pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  return (
    <motion.div
      className="glass-effect rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.div
          className="p-4 rounded-full bg-gradient-to-r from-pink-200 to-purple-200"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-purple-600" />
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-800 font-poppins">{title}</h3>
        <p className="text-gray-600">{description}</p>

        <div className="py-4">
          <span className="text-4xl font-bold gradient-text font-poppins">{price}</span>
        </div>

        {features && (
          <ul className="space-y-2 text-sm text-gray-600 text-left w-full">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <GradientButton onClick={handleContract} className="w-full mt-4">
          Contratar
        </GradientButton>
      </div>
    </motion.div>
  );
}

export default ServiceCard;