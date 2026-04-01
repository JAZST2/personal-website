export interface ContactInfo {
  icon: 'Mail' | 'Phone' | 'MapPin';
  label: string;
  value: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}