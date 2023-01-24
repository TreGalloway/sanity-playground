import PostCard from 'components/posts/posts-card'

import { Post } from '../../lib/sanity.queries'

type Props = {
  posts: Post[]
}

export default function PostSection({ posts }: Props) {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl"> Latest Posts</h2>
      </div>
      {posts.map((post) => (
        <div key={post.slug}>
          <PostCard _id={''} />
        </div>
      ))}
    </div>
  )
}
