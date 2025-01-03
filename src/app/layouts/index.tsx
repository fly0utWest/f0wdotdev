import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Header, Footer, NavSide, Navbar, TopLinkButton } from '@/shared/ui';
import { ThemeProvider } from 'next-themes';
import '../styles';
import Script from 'next/script';
import { IoWarning as WarningIcon } from 'react-icons/io5';
import { canonicalUrl, getDictionary, getLang } from '@/shared/config';
import { LocaleSwitcher } from '@/features/locale-switcher';

const JBmono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl!),
  title: "fly0utwest's lair",
  description: 'A personal site and CV',
};

export async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dictionary = await getDictionary();
  const locale = await getLang();

  return (
    <html
      className="scroll-smooth overscroll-none"
      lang={locale}
      suppressHydrationWarning
    >
      <head />
      {process.env.UMAMI_SCRIPT_URL && process.env.UMAMI_WEBSITE_ID && (
        <Script
          src={process.env.UMAMI_SCRIPT_URL}
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        ></Script>
      )}
      <body
        className={`${JBmono.className} bg-cover bg-center bg-no-repeat bg-fixed bg-custom-image`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="md:max-w-[768px] md:mx-auto min-h-screen">
            <div className="flex relative flex-col-reverse justify-end md:flex-row md:justify-center">
              <main className="flex flex-col w-full items-center min-h-screen px-6 pt-4 pb-10 font-bold text-2xl border-x-0 bg-white dark:bg-black md:border-x-2 border-x-black dark:border-x-white overflow-x-hidden">
                <LocaleSwitcher dict={dictionary.locales} />
                <noscript className="text-black text-base dark:text-white p-4 border-2 border-black dark:border-white my-5 flex flex-col items-center justify-center gap-2 text-center">
                  <WarningIcon className="text-4xl" />
                  <p>{dictionary['noscript-warning']}</p>
                </noscript>
                {children}
              </main>
              <NavSide />
            </div>
            <Footer />
          </div>
          <Navbar />
          <TopLinkButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
