'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export function HeroScrollIndicator() {
  const { scrollToSection } = useScrollToSection();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      onClick={() => scrollToSection('about')}
      className="absolute bottom-8 animate-bounce"
      aria-label="Scroll down"
    >
      <ArrowDown size={32} className="text-gray-400" />
    </motion.button>
  );
}