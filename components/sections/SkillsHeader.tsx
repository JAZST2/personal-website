'use client';

import { motion } from 'motion/react';
import { SKILLS_HEADING, SKILLS_SUBHEADING } from './skills.constants';

export function SkillsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl mb-4">{SKILLS_HEADING}</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        {SKILLS_SUBHEADING}
      </p>
    </motion.div>
  );
}