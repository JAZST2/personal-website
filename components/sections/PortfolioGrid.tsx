'use client';

import { PROJECTS } from './portfolio.constants';
import { PortfolioCard } from './PortfolioCard';

interface PortfolioGridProps {
  onCardClick: (index: number) => void;
}

export function PortfolioGrid({ onCardClick }: PortfolioGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <PortfolioCard
          key={project.title}
          project={project}
          index={index}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  );
}