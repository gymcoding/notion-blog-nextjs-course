import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/notion';

// 이미지 크기 정의
export const size = {
  width: 1200,
  height: 630,
};

// 이미지 콘텐츠 타입 정의
export const contentType = 'image/png';

// OG 이미지 생성 함수
export default async function OgImage({ params }: { params: { slug: string } }) {
  // 게시물 데이터 가져오기
  const { post } = await getPostBySlug(params.slug);

  // 게시물이 없는 경우 기본 이미지 반환
  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 64,
            background: 'linear-gradient(to bottom, #000000, #333333)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          게시물을 찾을 수 없습니다
        </div>
      ),
      { ...size }
    );
  }

  // 게시물 태그 문자열로 변환
  const tagString = post.tags?.join(', ') || '';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom, #000000, #333333)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          color: 'white',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: '#aaaaaa',
              marginBottom: 20,
            }}
          >
            짐코딩 블로그
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              marginBottom: 30,
              maxWidth: '80%',
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </div>
          {post.description && (
            <div
              style={{
                fontSize: 32,
                color: '#cccccc',
                maxWidth: '70%',
                marginBottom: 30,
              }}
            >
              {post.description.length > 100
                ? `${post.description.substring(0, 100)}...`
                : post.description}
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: 24,
            color: '#aaaaaa',
          }}
        >
          <div>{post.date}</div>
          <div>{tagString}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
