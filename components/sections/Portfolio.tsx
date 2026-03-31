'use client';

import { AnimatePresence } from 'motion/react';
import { useGallery } from '@/hooks/useGallery';
import { PROJECTS } from './portfolio.constants';
import { PortfolioHeader } from './PortfolioHeader';
import { PortfolioGrid } from './PortfolioGrid';
import { GalleryModal } from './GalleryModal';

export function Portfolio() {
  const {
    selectedProject,
    currentImageIndex,
    openGallery,
    closeGallery,
    nextImage,
    prevImage,
    goToImage,
  } = useGallery();

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <PortfolioHeader />
        <PortfolioGrid onCardClick={openGallery} />
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <GalleryModal
            project={PROJECTS[selectedProject]}
            currentImageIndex={currentImageIndex}
            onClose={closeGallery}
            onNext={nextImage}
            onPrev={prevImage}
            onGoTo={goToImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}