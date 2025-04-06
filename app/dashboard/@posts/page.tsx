import { Badge } from '@/components/ui/badge';

const recentPosts = [
  {
    title: 'Next.js 14로 블로그 만들기',
    excerpt: 'App Router와 서버 컴포넌트를 활용한 블로그 제작 가이드',
    date: '2024-03-21',
    views: 1234,
    category: 'Tutorial',
  },
  {
    title: 'React Server Components 완벽 가이드',
    excerpt: 'RSC의 개념부터 실전 활용까지',
    date: '2024-03-18',
    views: 856,
    category: 'Deep Dive',
  },
  {
    title: 'Tailwind CSS 실전 프로젝트',
    excerpt: '실무에서 자주 사용하는 Tailwind CSS 패턴',
    date: '2024-03-15',
    views: 642,
    category: 'CSS',
  },
  {
    title: 'TypeScript 타입 시스템 마스터하기',
    excerpt: '고급 타입과 타입 추론 이해하기',
    date: '2024-03-12',
    views: 923,
    category: 'TypeScript',
  },
];

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">최근 게시물</h2>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div key={post.title} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{post.title}</h3>
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <p className="text-muted-foreground text-sm">{post.excerpt}</p>
            <div className="text-muted-foreground flex items-center gap-4 text-sm">
              <span>{post.date}</span>
              <span>조회수 {post.views}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
