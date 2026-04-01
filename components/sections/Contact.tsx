'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { ContactHeader } from './ContactHeader';
import { ContactInfoPanel } from './ContactInfoPanel';
import { ContactForm } from './ContactForm';

export function Contact() {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ContactHeader />
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfoPanel />
          <ContactForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}