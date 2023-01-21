import PostCard from 'components/posts/posts-card'

export default function PostSection() {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl"> Latest Posts</h2>
      </div>
      <PostCard />
    </div>
  )
}
