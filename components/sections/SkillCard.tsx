'use client';

import { motion } from 'motion/react';
import { Skill } from './skills.constants';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 },
      }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center gap-4 cursor-pointer group"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:shadow-lg`}
      >
        <Icon size={32} className="text-white" />
      </motion.div>

      <motion.p
        className="text-lg text-center"
        whileHover={{ scale: 1.1 }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  );
}