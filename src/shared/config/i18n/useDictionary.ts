'use client';

import { useEffect, useState } from 'react';
import { Dictionary } from './dictionaries';
import { Locale } from './i18n.config';
import { useLang } from './useLang';

export const useDictionary = (locale?: Locale): Dictionary | undefined => {
  const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    ru: () => import('./dictionaries/ru.json').then((module) => module.default),
  };

  const [dict, setDict] = useState<Dictionary>();

  const lang = useLang();

  useEffect(() => {
    dictionaries[locale || lang]?.().then(setDict);
  }, [lang, locale]);

  return dict as Dictionary;
};
