import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import '@/css/tailwind.css'
import '@/css/prism.css'

import LayoutWrapper from '@/components/LayoutWrapper'
import Analytics from '@/components/analytics'
import { ClientReload } from '@/components/ClientReload'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ClientReload />
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
