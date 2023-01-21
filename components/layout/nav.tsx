import { IconCommand } from '@tabler/icons'
import CommandPalette from 'components/cmd/cmd-palette'
import Head from 'next/head'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header
      aria-label="tregalloway.com"
      className="dark:bg-zinc-900 dark:text-white"
    >
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block" href="/">
              <h1 className="text-2xl font-bold sm:text-3xl ">Tre.</h1>
            </Link>
          </div>

          <div className=" md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <a className="transition hover:text-sky-300/75" href="/">
                    Home
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-sky-300/75" href="/blog">
                    Blog
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-sky-300/75" href="/tech">
                    Tech
                  </a>
                </li>

                <li>
                  <a
                    className="transition hover:text-sky-300/75"
                    href="/newsletter"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block ">
                <button className=" hover:text-sky-200">
                  <CommandPalette />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
