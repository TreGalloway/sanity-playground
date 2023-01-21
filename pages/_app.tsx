import 'tailwindcss/tailwind.css'

import Nav from 'components/layout/nav.tsx'
import "superkey/styles.css";


import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Nav/>
      <Component {...pageProps} />
    </>
  )
}
