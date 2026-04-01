'use client';

import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { ContactFormData } from '@/types/contact';

interface ContactFormProps {
  formData: ContactFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const inputClass =
  'w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all';

const labelClass = 'block text-sm mb-2 text-gray-700 dark:text-gray-300';

export function ContactForm({ formData, onChange, onSubmit }: ContactFormProps) {
  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          id="message"
          name="message"
          value={formData.message}
          onChange={onChange}
          required
          rows={6}
          className={`${inputClass} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 text-lg"
      >
        <Send size={20} />
        Send Message
      </motion.button>
    </motion.form>
  );
}