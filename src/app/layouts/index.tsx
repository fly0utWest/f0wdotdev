import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '../styles';
import { Header } from '@/shared/header';
import { Navbar } from '@/shared/navbar';
import Head from 'next/head';

const JBmono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'fly0utwest',
  description: 'fly0utwest\s site <3',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/app/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={JBmono.className}>
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
