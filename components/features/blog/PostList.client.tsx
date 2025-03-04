'use client';

import Link from 'next/link';
import { Post } from '@/types/blog';
import { PostCard } from '@/components/features/blog/PostCard';
import { useState, useEffect } from 'react';
import { getPublishedPosts } from '@/lib/notion';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPublishedPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

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
