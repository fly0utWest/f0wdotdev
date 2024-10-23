'use client';

import { useEffect, useState } from 'react';
import { i18n, Locale } from '@/shared/config/';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/shared/config/';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();
  
  useEffect(() => {
    setActiveLang({
      en: lang === 'en',
      ru: lang === 'ru',
    });
  }, [lang]);

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';

    if (i18n.locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }

    return `/${segments.join('/')}`;
  };

  const handlRedirect = (locale: Locale) => {
    const newPathname = redirectedPathName(locale);
    router.push(newPathname);
    router.refresh();
  };

  return (
    <div className="text-lg flex flex-row gap-4 justify-center items-center p-2 w-full">
      <button
        className={`hover:underline text-black dark:text-white${
          activeLang.en ? ' underline' : ' no-underline'
        }`}
        onClick={() => handlRedirect('en')}
      >
        {dict[0]}
      </button>
      <button
        className={`hover:underline text-black dark:text-white${
          activeLang.ru ? ' underline' : ' no-underline'
        }`}
        onClick={() => handlRedirect('ru')}
      >
        {dict[1]}
      </button>
    </div>
  );
};

export default LocaleSwitcher;
