import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      {/* About, Portfolio, Skills, Contact sections go here */}
    </>
  );
}