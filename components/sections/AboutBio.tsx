'use client';

import { motion } from 'motion/react';
import { ABOUT_BIO } from './about.constants';

export function AboutBio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-16 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg"
    >
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {ABOUT_BIO}
      </p>
    </motion.div>
  );
}