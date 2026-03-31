import { useState } from 'react';
import { PROJECTS } from '@/components/sections/portfolio.constants';

export function useGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject === null) return;
    setCurrentImageIndex((prev) =>
      prev === PROJECTS[selectedProject].gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (selectedProject === null) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? PROJECTS[selectedProject].gallery.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => setCurrentImageIndex(index);

  return {
    selectedProject,
    currentImageIndex,
    openGallery,
    closeGallery,
    nextImage,
    prevImage,
    goToImage,
  };
}