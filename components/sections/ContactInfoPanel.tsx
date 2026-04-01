'use client';

import { motion } from 'motion/react';
import { CONTACT_INFO, CONTACT_INFO_HEADING } from './contact.constants';
import { ContactInfoItem } from './ContactInfoItem';

export function ContactInfoPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl mb-8">{CONTACT_INFO_HEADING}</h3>
      <div className="space-y-6">
        {CONTACT_INFO.map((item) => (
          <ContactInfoItem key={item.label} item={item} />
        ))}
      </div>
    </motion.div>
  );
}