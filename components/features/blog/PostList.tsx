import Link from 'next/link';
import { Post } from '@/types/blog';
import { PostCard } from '@/components/features/blog/PostCard';

interface PostListProps {
  posts: Post[];
}
export default function PostList({ posts }: PostListProps) {
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
