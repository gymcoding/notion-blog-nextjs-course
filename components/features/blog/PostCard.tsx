'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import Image from 'next/image';
import { Post } from '@/types/blog';
import { formatDate } from '@/lib/date';

interface PostCardProps {
  post: Post;
  isFirst?: boolean;
}

export function PostCard({ post, isFirst = false }: PostCardProps) {
  return (
    <Card className="group bg-card/50 hover:border-primary/20 gap-0 overflow-hidden border p-0 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      {post.coverImage && (
        <div className="relative aspect-[2/1] overflow-hidden">
          <div className="from-background/20 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={isFirst}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 font-medium transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h2 className="group-hover:text-primary mb-2 text-xl font-bold tracking-tight transition-colors">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
            {post.description}
          </p>
        )}
        <div className="text-muted-foreground mt-6 flex items-center gap-x-4 text-sm">
          {post.author && (
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          )}
          {post.date && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time>{formatDate(post.date)}</time>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
