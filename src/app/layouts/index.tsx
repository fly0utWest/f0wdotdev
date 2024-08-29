import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Header } from '@/shared/header';
import { Navbar } from '@/shared/navbar';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '../styles';
import { NavSide } from '@/shared';
import { Footer } from '@/shared/footer';

const JBmono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "fly0utwest's",
  description: 'a site <3',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤍</text></svg>"
        />
      </Head>
      <body className={JBmono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="md:max-w-[768px] md:mx-auto min-h-screen">
            <div className="flex relative flex-col-reverse justify-end md:flex-row md:justify-start">
              {children}
              <NavSide />
            </div>
            <Footer />
          </div>
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
