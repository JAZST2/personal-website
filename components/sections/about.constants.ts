import { Code, Server, Smartphone } from 'lucide-react';

export const ABOUT_HEADING = 'About Me';

export const ABOUT_SUBHEADING =
  'Passionate developer with expertise in creating exceptional mobile experiences across the Apple ecosystem and beyond.';

export const ABOUT_BIO =
  "With years of experience in mobile development, I specialize in creating high-performance applications for iOS, Apple Watch, and CarPlay. My expertise spans from native Swift development to cross-platform solutions with React Native. I'm passionate about clean code, elegant UI/UX, and delivering products that users love.";

export const ABOUT_FEATURES = [
  {
    icon: Smartphone,
    title: 'iOS Development',
    description:
      'Expert in Swift and native iOS development with focus on performance and user experience.',
  },
  {
    icon: Code,
    title: 'Cross-Platform',
    description:
      'Building mobile apps with React Native for seamless iOS and Android experiences.',
  },
  {
    icon: Server,
    title: 'Full-Stack',
    description:
      'Complete solutions from backend APIs to beautiful frontend interfaces.',
  },
] as const;