'use client';

import { motion } from 'motion/react';
import { HeroPhoto } from './HeroPhoto';
import { HeroCTA } from './HeroCTA';
import { HeroSocials } from './HeroSocials';
import { HeroScrollIndicator } from './HeroScrollIndicator';
import { HERO_TITLE, HERO_DESCRIPTION } from './hero.constants';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <HeroPhoto />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl mb-4"
          >
            {HERO_TITLE}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
          >
            {HERO_DESCRIPTION}
          </motion.p>

          <HeroCTA />
          <HeroSocials />
          <HeroScrollIndicator />
        </div>
      </div>
    </section>
  );
}