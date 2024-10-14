'use client';

import { usePathname } from 'next/navigation';
import { Locale, i18n } from './i18n.config';

export const useLang = (): Locale => {
  const pathname = usePathname();

  const segment = pathname!.split('/')[1] as Locale;

  if (i18n.locales.includes(segment)) return segment;

  return i18n.defaultLocale;
};
