import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container py-6 md:py-8 lg:py-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[240px_1fr_240px] md:gap-8">
        <aside className="space-y-4"></aside>
        <div className="space-y-8">
          {/* 헤더 */}
          <div className="space-y-4">
            <Skeleton className="h-8 w-[250px]" />
            <Skeleton className="h-4 w-[180px]" />
          </div>

          {/* 메인 이미지 */}
          <Skeleton className="aspect-video w-full rounded-lg" />

          {/* 본문 컨텐츠 */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <aside className="space-y-4"></aside>
      </div>
    </div>
  );
}
