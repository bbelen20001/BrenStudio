
import React from 'react';
import { motion } from 'framer-motion';

function ProcessStep({ number, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center h-full"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700 font-bold rounded-full text-xl mb-4 font-poppins">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default ProcessStep;
