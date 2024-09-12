import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Header, Footer, NavSide, Navbar, TopLinkButton } from '@/shared/ui';
import { ThemeProvider } from 'next-themes';
import '../styles';

const JBmono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "fly0utwest's lair",
  description: 'a portfolio site',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={`${JBmono.className} bg-cover bg-center bg-no-repeat bg-fixed bg-custom-image`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="md:max-w-[768px] md:mx-auto min-h-screen">
            <div className="flex relative flex-col-reverse justify-end md:flex-row md:justify-center">
              <main className="flex flex-col w-full items-center min-h-screen px-6 pt-4 pb-10 font-bold text-2xl border-x-0 bg-white dark:bg-black md:border-x-2 border-x-black dark:border-x-white overflow-x-hidden">
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
