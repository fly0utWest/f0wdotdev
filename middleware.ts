import { i18n } from '@/shared/config';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  // const ignoredPaths = [/^\/img\/*$/, /^\/icon\.png$/];
  // if (ignoredPaths.some((regex) => regex.test(pathname))) {
  //   return;
  // }

  if (
    pathname.startsWith(`/${i18n.defaultLocale}/`) ||
    pathname === `/${i18n.defaultLocale}`
  ) {
    const response = NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${i18n.defaultLocale}`,
          pathname === `/${i18n.defaultLocale}` ? '/' : '',
        ),
        request.url,
      ),
      {
        headers: requestHeaders,
      },
    );
    return response;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const response = NextResponse.rewrite(
      new URL(
        `/${i18n.defaultLocale}${pathname}${request.nextUrl.search}`,
        request.nextUrl.href,
      ),
      {
        request: {
          headers: requestHeaders,
        },
      },
    );
    return response;
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
