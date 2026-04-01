'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactInfo } from '@/types/contact';

const ICON_MAP = { Mail, Phone, MapPin };

interface ContactInfoItemProps {
  item: ContactInfo;
}

export function ContactInfoItem({ item }: ContactInfoItemProps) {
  const Icon = ICON_MAP[item.icon];

  return (
    <motion.a
      href={item.href}
      whileHover={{ x: 10 }}
      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
        <Icon size={24} className="text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
        <p className="text-lg">{item.value}</p>
      </div>
    </motion.a>
  );
}