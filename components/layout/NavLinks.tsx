'use client';

import { motion } from 'motion/react';
import { NAV_ITEMS } from './header.constants';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export function NavLinks() {
  const { scrollToSection } = useScrollToSection();

  return (
    <ul className="hidden md:flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <motion.li
          key={item.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => scrollToSection(item.id)}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {item.label}
          </button>
        </motion.li>
      ))}
    </ul>
  );
}