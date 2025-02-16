import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  return (
    // min-h-screen으로 전체 높이 보장, grid로 3개 영역 분할
    <div className="flex min-h-screen flex-col">
      {/* Header 영역 */}
      <Header />
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
      <Footer />
    </div>
  );
}
