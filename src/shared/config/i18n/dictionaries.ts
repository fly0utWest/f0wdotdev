import { getLang } from './getLang';
import { Locale } from './i18n.config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default), 
};

export const getDictionary = async (locale?: Locale) => {
  const lang = await getLang();

  return dictionaries[locale || lang]?.() ?? dictionaries.en();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
