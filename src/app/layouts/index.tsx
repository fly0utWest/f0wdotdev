import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Header } from '@/shared/header';
import { Navbar } from '@/shared/navbar';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '../styles';
import { NavSide } from '@/shared';

const JBmono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'fly0utwest',
  description: 'fly0utwests site <3',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="faviicon" href="/app/favicon.ico" sizes="any" />
      </Head>
      <body className={JBmono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex relative flex-col-reverse justify-end md:max-w-[768px] md:mx-auto min-h-screen md:flex-row md:justify-start">
            {children}
            <NavSide />
          </div>
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
