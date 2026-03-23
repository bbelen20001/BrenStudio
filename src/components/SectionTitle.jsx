
import React from 'react';
import { motion } from 'framer-motion';

function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <motion.div
      className={`space-y-4 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`inline-block w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-2 ${centered ? 'mx-auto' : ''}`}></div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-poppins tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
