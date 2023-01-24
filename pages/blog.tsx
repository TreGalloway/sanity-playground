// import { IconSearch } from '@tabler/icons'
// import {
//   getAllPostsSlugs,
//   getPostAndMoreStories,
//   getSettings,
// } from 'lib/sanity.client'
// import { GetStaticProps } from 'next'

// export default function Blog() {
//   return (
//     <div className="max-w-screen-xl mx-auto sm:py-12 sm:px-6 lg:px-8">
//       <h1 className="text-3xl font-bold sm:text-4xl">Blog</h1>
//       <div className="mt-3 ">
//         <div className="">
//           <div className="px-4 sm:px-6 lg:px-4">
//             <div className="">
//               <input
//                 type="text"
//                 className="z-0 w-full h-10 pl-5 pr-8 rounded-md border-black/10 bg-slate-50 focus:shadow focus:outline-none"
//                 placeholder="Search anything..."
//               />
//               <div className="absolute top-4 right-3">
//                 <i className="z-20 text-gray-400 fa fa-search hover:text-gray-500"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/BlogPage'
import { getAllPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

interface PageProps {
  posts: Post[]
  settings: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { posts, settings, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage posts={posts} settings={settings} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
