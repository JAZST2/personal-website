'use client';

import { motion } from 'motion/react';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export function NavLogo() {
  const { scrollToSection } = useScrollToSection();

  return (
    <motion.button
      onClick={() => scrollToSection('hero')}
      className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Dev
    </motion.button>
  );
}