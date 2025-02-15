import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">블로그 목록</h1>
      <Card>
        <CardHeader>
          <CardTitle>블로그 제목</CardTitle>
          <CardDescription>블로그 설명</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
