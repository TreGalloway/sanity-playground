// import { PreviewSuspense } from '@sanity/preview-kit'
// import IndexPage from 'components/IndexPage'
// import { getAllPosts, getSettings } from 'lib/sanity.client'
// import { Post, Settings } from 'lib/sanity.queries'
// import { GetStaticProps } from 'next'
// import { lazy } from 'react'

// const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

// interface PageProps {
//   posts: Post[]
//   settings: Settings
//   preview: boolean
//   token: string | null
// }

// interface Query {
//   [key: string]: string
// }

// interface PreviewData {
//   token?: string
// }

// export default function Page(props: PageProps) {
//   const { posts, settings, preview, token } = props

//   if (preview) {
//     return (
//       <PreviewSuspense
//         fallback={
//           <IndexPage loading preview posts={posts} settings={settings} />
//         }
//       >
//         <PreviewIndexPage token={token} />
//       </PreviewSuspense>
//     )
//   }

//   return <IndexPage posts={posts} settings={settings} />
// }

// export const getStaticProps: GetStaticProps<
//   PageProps,
//   Query,
//   PreviewData
// > = async (ctx) => {
//   const { preview = false, previewData = {} } = ctx

//   const [settings, posts = []] = await Promise.all([
//     getSettings(),
//     getAllPosts(),
//   ])

//   return {
//     props: {
//       posts,
//       settings,
//       preview,
//       token: previewData.token ?? null,
//     },
//   }
// }

import NewsletterForm from '../components/forms/newsletterform'
import Guides from '../components/sections/guide-section'
// import PostSection from '../components/sections/posts-section'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto sm:py-12 sm:px-6 lg:px-8">
      <NewsletterForm />
      <Guides />
    </div>
  )
}
