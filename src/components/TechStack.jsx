
import React from 'react';
import { motion } from 'framer-motion';

function TechStack() {
  const technologies = [
    'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 
    'MongoDB', 'Express', 'Framer Motion', 'WordPress', 
    'Shopify', 'WooCommerce'
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {technologies.map((tech, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="px-4 py-2 bg-white/50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:border-purple-300 hover:text-purple-600 transition-all cursor-default"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}

export default TechStack;
