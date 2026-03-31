'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface GalleryModalProps {
  project: Project;
  currentImageIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
}

export function GalleryModal({
  project,
  currentImageIndex,
  onClose,
  onNext,
  onPrev,
  onGoTo,
}: GalleryModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-gray-100 z-10"
        >
          <X size={24} />
        </motion.button>

        {/* Image */}
        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={project.gallery[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors z-10"
          >
            <ChevronLeft size={32} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors z-10"
          >
            <ChevronRight size={32} />
          </motion.button>
        </div>

        {/* Info */}
        <div className="mt-6 text-center text-white">
          <h3 className="text-2xl mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <p className="text-sm text-gray-400">
            {currentImageIndex + 1} / {project.gallery.length}
          </p>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {project.gallery.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onGoTo(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentImageIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}