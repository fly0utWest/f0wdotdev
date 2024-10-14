'use client';

import { useState } from 'react';
import { i18n, Locale } from '@/shared/config/';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/shared/config/';

interface LocaleSwitcherProps {
  dict: string[];
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ dict }) => {
  const pathname = usePathname();
  const lang = useLang();
  const segments = pathname!.split('/').filter(Boolean);
  const [activeLang, setActiveLang] = useState({
    en: lang === 'en',
    ru: lang === 'ru',
  });

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';

    if (i18n.locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }

    return `/${segments.join('/')}`;
  };

  return (
    <div className="text-lg flex flex-row gap-4 justify-center items-center p-2 w-full">
      <Link
        className={`hover:underline text-black dark:text-white${
          activeLang.en ? ' underline' : ' no-underline'
        }`}
        href={redirectedPathName('en')}
      >
        {dict[0]}
      </Link>
      <Link
        className={`hover:underline text-black dark:text-white${
          activeLang.ru ? ' underline' : ' no-underline'
        }`}
        href={redirectedPathName('ru')}
      >
        {dict[1]}
      </Link>
    </div>
  );
};

export default LocaleSwitcher;
