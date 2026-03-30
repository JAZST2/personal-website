'use client';

import { motion } from 'motion/react';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export function HeroCTA() {
  const { scrollToSection } = useScrollToSection();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="flex gap-4 mb-12"
    >
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
      >
        Get in Touch
      </motion.a>
      <motion.a
        href="#portfolio"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
        onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
      >
        View Work
      </motion.a>
    </motion.div>
  );
}