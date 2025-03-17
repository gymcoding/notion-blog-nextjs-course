import { getPublishedPosts } from '@/lib/notion';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const tag = searchParams.get('tag') || undefined;
  const sort = searchParams.get('sort') || undefined;
  const startCursor = searchParams.get('startCursor') || undefined;
  const pageSize = Number(searchParams.get('pageSize')) || undefined;

  console.log('API 요청 파라미터:', { tag, sort, startCursor, pageSize });

  const response = await getPublishedPosts({ tag, sort, startCursor, pageSize });

  // 캐시 제어 헤더 추가
  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
