import Link from 'next/link';
import { PostCard } from '@/components/features/blog/PostCard';
import { getPublishedPosts } from '@/lib/notion';
interface PostListProps {
  selectedTag: string;
  selectedSort: string;
}
export default async function PostList({ selectedTag, selectedSort }: PostListProps) {
  const posts = await getPublishedPosts(selectedTag, selectedSort);

  return (
    <div className="grid gap-4">
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <PostCard post={post} isFirst={index === 0} />
        </Link>
      ))}
    </div>
  );
}
