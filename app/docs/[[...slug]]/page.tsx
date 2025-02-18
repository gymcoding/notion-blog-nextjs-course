import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}
export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;

  if (!slug) {
    return (
      <>
        <h1 className="text-4xl font-bold">문서 메인 페이지</h1>
        <Separator />
        <div className="grid gap-4">
          <Link href="/docs/intro">
            <Card>
              <CardHeader>
                <CardTitle>시작하기</CardTitle>
                <CardDescription>
                  Next.js의 기본 개념과 프로젝트 설정 방법을 알아봅니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/docs/guide/basic">
            <Card>
              <CardHeader>
                <CardTitle>고급 가이드</CardTitle>
                <CardDescription>심화 개념과 실전 활용 방법을 다룹니다.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="space-y-4">
        <div className="text-muted-foreground flex items-center gap-2">
          <span>문서</span>
          {slug.map((segment, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span className={index === slug.length - 1 ? 'text-foreground font-medium' : ''}>
                {segment}
              </span>
            </div>
          ))}
        </div>
        <h1 className="text-4xl font-bold">{slug[slug.length - 1]}</h1>
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>현재 경로 정보</CardTitle>
          <CardDescription>
            <code className="bg-muted rounded-md px-2 py-1">
              params.slug: {JSON.stringify(slug)}
            </code>
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
