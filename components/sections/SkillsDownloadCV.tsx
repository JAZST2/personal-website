'use client';

import { motion } from 'motion/react';
import { CV_PATH, CV_LABEL, CV_HINT } from './skills.constants';

export function SkillsDownloadCV() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 text-center"
    >
      <motion.a
        href={CV_PATH}
        download
        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg text-lg group"
      >
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </motion.svg>
        <span className="group-hover:tracking-wider transition-all">{CV_LABEL}</span>
      </motion.a>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{CV_HINT}</p>
    </motion.div>
  );
}