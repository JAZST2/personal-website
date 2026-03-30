'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useProfilePhoto } from '@/hooks/useProfilePhoto';

export function HeroPhoto() {
  const { currentPhoto, isSpinning, handlePhotoClick } = useProfilePhoto();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="relative mb-8"
    >
      <motion.div
        animate={isSpinning ? { rotateY: 360 } : {}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
        onClick={handlePhotoClick}
        className="relative w-52 h-52 rounded-full overflow-hidden shadow-2xl border-8 border-indigo-600 dark:border-cyan-500 cursor-pointer"
      >
        <Image
          key={currentPhoto}
          src={currentPhoto}
          alt="Developer Profile"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}