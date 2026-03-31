'use client';

import { ABOUT_FEATURES } from './about.constants';
import { AboutFeatureCard } from './AboutFeatureCard';

export function AboutFeatures() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {ABOUT_FEATURES.map((feature, index) => (
        <AboutFeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
        />
      ))}
    </div>
  );
}