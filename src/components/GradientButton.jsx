import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

function GradientButton({ children, className, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500',
    secondary: 'bg-gradient-to-r from-blue-400 via-green-400 to-lavender hover:from-blue-500 hover:via-green-500 hover:to-purple-400',
  };

  return (
    <motion.button
      className={cn(
        'px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300',
        variants[variant],
        className
      )}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default GradientButton;