import NewsletterForm from '../components/forms/newsletterform'
import Guides from '../components/sections/guide-section'
import PostSection from '../components/sections/posts-section'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto sm:py-12 sm:px-6 lg:px-8">
      <NewsletterForm />
      <Guides />
      {/* <PostSection posts={posts} /> */}
    </div>
  )
}
