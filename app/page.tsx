import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* 좌측 사이드바 */}
        <aside>
          <Card>태그목록</Card>
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>

          {/* 블로그 카드 그리드 */}
          <div className="grid gap-4">
            {/* 블로그 카드 반복 */}
            {[1, 2, 3].map((i) => (
              <Link href={`/blog/${i}`} key={i}>
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>블로그 제목 {i}</CardTitle>
                    <CardDescription>
                      이것은 블로그 포스트에 대한 간단한 설명입니다. 여러 줄의 텍스트가 있을 수
                      있습니다.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        {/* 우측 사이드바 */}
        <aside>
          <Card>개발자 프로필</Card>
        </aside>
      </div>
    </div>
  );
}
