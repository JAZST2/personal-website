'use client';

import { motion } from 'motion/react';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <NavLogo />
        <div className="flex items-center gap-8">
          <NavLinks />
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}