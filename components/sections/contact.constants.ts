import { ContactInfo } from '@/types/contact';

export const CONTACT_HEADING = 'Get In Touch';
export const CONTACT_SUBHEADING = "Let's discuss your next project";
export const CONTACT_INFO_HEADING = 'Contact Information';

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'hello@developer.com',
    href: 'mailto:hello@developer.com',
  },
  {
    icon: 'Phone',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: 'MapPin',
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

export const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  message: '',
};