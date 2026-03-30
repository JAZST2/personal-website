'use client';

import { motion } from 'motion/react';
import { GitBranch, File, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from './hero.constants';

const ICON_MAP = { GitBranch, File, Mail };

export function HeroSocials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex gap-6"
    >
      {SOCIAL_LINKS.map((social) => {
        const Icon = ICON_MAP[social.icon];
        return (
          <motion.a
            key={social.label}
            href={social.href}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
            aria-label={social.label}
          >
            <Icon size={24} />
          </motion.a>
        );
      })}
    </motion.div>
  );
}