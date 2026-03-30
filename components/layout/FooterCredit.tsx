import { Heart } from 'lucide-react';
import { FOOTER_AUTHOR } from './footer.constants';

export function FooterCredit() {
  return (
    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
      Made with <Heart size={16} className="text-red-500 fill-current" /> by {FOOTER_AUTHOR}
    </p>
  );
}