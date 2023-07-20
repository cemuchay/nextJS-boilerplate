import 'styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import ErrorBoundary from 'components/commons/ErrorBoundary/ErrorBoundary';
import { Analytics } from '@vercel/analytics/react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <ErrorBoundary>
      <SSRProvider>
        <Component {...pageProps} />
        <Analytics />
      </SSRProvider>
    </ErrorBoundary>

  )
}

export default MyApp