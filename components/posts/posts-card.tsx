import { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostCard({ _id, title, slug, date, excerpt }: Post) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="p-10">
        <div className="w-full lg:flex lg:max-w-full">
          <div className="flex flex-col justify-between p-4 leading-normal rounded-md shadow-md dark:shadow-slate-200/ ring-1 ring-black/10 dark:bg-zinc-800/30 dark:shadow-slate-50/10">
            <div className="mb-8">
              <div className="mb-2 text-xl font-bold ">{title}</div>
              <p className="text-base ">{excerpt}</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                {/* <p className="leading-none ">{posts.author}</p> */}
                <p className="">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
