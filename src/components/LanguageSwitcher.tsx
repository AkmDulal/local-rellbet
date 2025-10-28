'use client';

import {useRouter, usePathname} from '@/i18n/navigation';
import {useLocale} from 'next-intl';

export default function LanguageSwitcher() {
   const router = useRouter();
  const pathname = usePathname(); 
  const locale = useLocale();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;
    router.replace(pathname, {locale: nextLocale});
  }
  return (
    <select
      value={locale}
      onChange={onChange}
      className="border rounded-md px-2 py-1 bg-transparent"
      aria-label="Change language"
    >
      <option value="en">English</option>
      <option value="bn">বাংলা</option>
      <option value="hi">हिन्दी</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      <option value="pt">Português</option>
    </select>
  );
}
