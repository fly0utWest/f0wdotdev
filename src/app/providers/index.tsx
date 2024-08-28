import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  console.log('Rendered with theme provider');

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
