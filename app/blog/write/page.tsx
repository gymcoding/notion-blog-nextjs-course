import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

export default function WritePage() {
  return (
    <div className="container py-10">
      <Card className="mx-auto max-w-2xl">
        <CardContent className="p-6">
          {/* 제목 입력 */}
          <div className="mb-6 space-y-2">
            <Label htmlFor="title">제목</Label>
            <Input id="title" placeholder="제목을 입력해주세요" className="h-12 text-lg" />
          </div>

          {/* 태그 입력 */}
          <div className="mb-6 space-y-2">
            <Label htmlFor="tags">태그</Label>
            <Input id="tags" placeholder="태그를 입력해주세요" className="h-12" />
          </div>

          {/* 본문 입력 */}
          <div className="space-y-2">
            <Label htmlFor="content">본문</Label>
            <Textarea
              id="content"
              placeholder="작성해주세요"
              className="min-h-[400px] resize-none"
            />
          </div>

          {/* 버튼 영역 */}
          <div className="mt-6 flex justify-end gap-2">
            <Button>
              <Loader2 className="mr-2 hidden h-4 w-4 animate-spin" />
              발행하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
