'use client';

import { SKILLS } from './skills.constants';
import { SkillCard } from './SkillCard';

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {SKILLS.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  );
}