'use client';

import { motion } from 'motion/react';
import { CONTACT_HEADING, CONTACT_SUBHEADING } from './contact.constants';

export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl mb-4">{CONTACT_HEADING}</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        {CONTACT_SUBHEADING}
      </p>
    </motion.div>
  );
}