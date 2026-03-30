import { useState } from 'react';
import { PROFILE_PHOTOS } from '@/components/sections/hero.constants';

export function useProfilePhoto() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handlePhotoClick = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % PROFILE_PHOTOS.length);
      setIsSpinning(false);
    }, 600);
  };

  return {
    currentPhoto: PROFILE_PHOTOS[currentPhotoIndex],
    isSpinning,
    handlePhotoClick,
  };
}