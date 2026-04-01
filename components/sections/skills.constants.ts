import {
  Smartphone,
  Watch,
  Car,
  Code2,
  Database,
  GitBranch,
  Zap,
  Package,
  Cloud,
  Layers,
  Terminal,
  Cpu,
  LucideIcon,
} from 'lucide-react';

export const SKILLS_HEADING = 'Skills & Technologies';
export const SKILLS_SUBHEADING = 'Tools and technologies I use to build amazing apps';
export const CV_PATH = '/cv.pdf';
export const CV_LABEL = 'Download CV';
export const CV_HINT = 'This button downloads my curriculum vitae (CV/Resume)';

export interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

export const SKILLS: Skill[] = [
  { name: 'Swift',        icon: Zap,         color: 'from-orange-500 to-red-500'    },
  { name: 'SwiftUI',      icon: Layers,      color: 'from-blue-500 to-cyan-500'     },
  { name: 'UIKit',        icon: Package,     color: 'from-purple-500 to-pink-500'   },
  { name: 'WatchOS',      icon: Watch,       color: 'from-gray-700 to-gray-900'     },
  { name: 'CarPlay',      icon: Car,         color: 'from-blue-600 to-blue-800'     },
  { name: 'React Native', icon: Code2,       color: 'from-cyan-500 to-blue-600'     },
  { name: 'TypeScript',   icon: Terminal,    color: 'from-blue-600 to-blue-800'     },
  { name: 'Node.js',      icon: Cpu,         color: 'from-green-600 to-green-800'   },
  { name: 'REST APIs',    icon: Cloud,       color: 'from-indigo-500 to-purple-600' },
  { name: 'CoreData',     icon: Database,    color: 'from-yellow-600 to-orange-600' },
  { name: 'Git',          icon: GitBranch,   color: 'from-red-500 to-orange-500'    },
  { name: 'Xcode',        icon: Smartphone,  color: 'from-blue-500 to-indigo-600'   },
];