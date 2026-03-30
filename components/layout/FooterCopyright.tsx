const currentYear = new Date().getFullYear();

export function FooterCopyright() {
  return (
    <p className="text-gray-600 dark:text-gray-400">
      © {currentYear} All rights reserved
    </p>
  );
}