'use client';

import { AboutHeader } from './AboutHeader';
import { AboutFeatures } from './AboutFeatures';
import { AboutBio } from './AboutBio';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <AboutHeader />
        <AboutFeatures />
        <AboutBio />
      </div>
    </section>
  );
}