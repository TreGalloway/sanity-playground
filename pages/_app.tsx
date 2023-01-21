import 'tailwindcss/tailwind.css'
import 'superkey/styles.css'

import Nav from 'components/layout/nav'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="dark:bg-zinc-900 dark:text-white">
        <div className="md:container md:mx-auto ">
          <Nav />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
