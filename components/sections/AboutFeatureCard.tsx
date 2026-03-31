'use client';

import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface AboutFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function AboutFeatureCard({ icon: Icon, title, description, index }: AboutFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
      >
        <Icon size={32} className="text-white" />
      </motion.div>
      <h3 className="text-2xl mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}