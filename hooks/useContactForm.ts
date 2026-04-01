import { useState } from 'react';
import { ContactFormData } from '@/types/contact';
import { INITIAL_FORM_DATA } from '@/components/sections/contact.constants';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData(INITIAL_FORM_DATA);
  };

  return { formData, handleChange, handleSubmit };
}