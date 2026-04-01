'use client';

import { SkillsHeader } from './SkillsHeader';
import { SkillsGrid } from './SkillsGrid';
import { SkillsDownloadCV } from './SkillsDownloadCV';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <SkillsHeader />
        <SkillsGrid />
        <SkillsDownloadCV />
      </div>
    </section>
  );
}