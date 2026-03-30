'use client';

import { motion } from 'motion/react';
import { FooterCredit } from './FooterCredit';
import { FooterCopyright } from './FooterCopyright';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <FooterCredit />
          <FooterCopyright />
        </motion.div>
      </div>
    </footer>
  );
}