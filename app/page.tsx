import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Home() {
  return (
    // min-h-screen으로 전체 높이 보장, grid로 3개 영역 분할
    <div className="flex min-h-screen flex-col">
      {/* Header 영역 */}
      <header className="sticky top-0 z-50 border-b">
        <div className="container mx-auto flex h-14 items-center px-4">
          <a href="#" className="text-xl font-semibold">
            <span className="font-bold">짐코딩 블로그</span>
          </a>
          <nav className="ml-auto flex items-center gap-4">
            <a href="#" className="hover:text-primary font-medium">
              홈
            </a>
            <a href="#" className="hover:text-primary font-medium">
              블로그
            </a>
            <a href="#" className="hover:text-primary font-medium">
              소개
            </a>
          </nav>
        </div>
      </header>

      {/* Main 영역 */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* 섹션 제목 */}
            <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>

            {/* 블로그 카드 그리드 */}
            <div className="space-y-4">
              {/* 블로그 카드 반복 */}
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>블로그 제목 {i}</CardTitle>
                    <CardDescription>
                      이것은 블로그 포스트에 대한 간단한 설명입니다. 여러 줄의 텍스트가 있을 수
                      있습니다.
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer 영역 */}
      <footer className="border-t">
        <div className="container mx-auto flex h-14 items-center justify-center">
          <p className="text-muted-foreground text-sm">
            Built with Next.js, Tailwind CSS and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}
