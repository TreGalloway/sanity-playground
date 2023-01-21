import Image from 'next/image'

export default function NewsletterForm() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600">
                0151 475 4450
              </a>

              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="p-8 rounded-lg shadow-xl ring-1 ring-black/10 dark:bg-zinc-800/30 dark:shadow-sky-500/40 lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only " htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg dark:bg-zinc-800 "
                  placeholder="@Name"
                  type="text"
                  id="name"
                />
              </div>

              <div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg dark:bg-zinc-800"
                    placeholder="@Email address"
                    type="email"
                    id="email"
                  />
                </div>
              </div>

              {/* <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Message"
                  rows="6"
                  id="message"
                ></textarea>
              </div> */}

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg sm:w-auto"
                >
                  <div className="flex items-center w-auto h-auto px-4 py-2 text-white border rounded-md border-sky-500 bg-sky-500 hover:bg-transparent hover:text-black focus:outline-none focus:ring">
                    <span className="font-medium"> Subscribe </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
