'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';
import { UrlObject } from 'url';
import { Locale, i18n } from './i18n.config';
import { useLang } from './useLang';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
}

const isExternalLink = (href: string | UrlObject): boolean => {
  return (
    typeof href === 'string' &&
    (href.startsWith('http://') || href.startsWith('https://'))
  );
};

const getLocalizedHref = (
  href: string | UrlObject,
  lang: string,
  defaultLocale: string,
): string | UrlObject => {
  if (isExternalLink(href) || typeof href !== 'string') {
    return href;
  }

  // Ensure href has a leading slash if it's a relative URL
  let url = href.startsWith('/') ? href : `/${href}`;

  const segments = url.split('/');

  // Check if the first segment after the leading slash is already a locale
  const potentialLocale = segments[1];

  if (i18n.locales.includes(potentialLocale as Locale)) {
    // If the URL already contains a locale, replace it with the new one
    segments[1] = lang;
    return segments.join('/');
  }

  // If there's no locale in the URL, prepend the current language unless it's the default locale
  return lang === defaultLocale ? url : `/${lang}${url}`;
};

export const Link: FC<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>
> = ({ children, href, ...props }) => {
  const lang = useLang();

  const localizedHref = getLocalizedHref(href, lang, i18n.defaultLocale);

  return (
    <NextLink {...props} href={localizedHref}>
      {children}
    </NextLink>
  );
};
