'use client';

import { motion } from 'motion/react';
import { ABOUT_HEADING, ABOUT_SUBHEADING } from './about.constants';

export function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl mb-4">{ABOUT_HEADING}</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {ABOUT_SUBHEADING}
      </p>
    </motion.div>
  );
}