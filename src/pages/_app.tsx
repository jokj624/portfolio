import { AppLayout } from '@/components/AppLayout';
import '@/styles/globals.scss';
import '../../public/static/fonts/style.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
