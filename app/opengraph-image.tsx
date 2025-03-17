import { ImageResponse } from 'next/og';
// 이미지 크기 정의
export const size = {
  width: 1200,
  height: 630,
};
// 이미지 콘텐츠 타입 정의
export const contentType = 'image/png';

// OG 이미지 생성 함수
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #000000, #333333)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 64,
            marginBottom: 40,
            fontWeight: 'bold',
          }}
        >
          짐코딩 블로그
        </div>
        <div
          style={{
            fontSize: 32,
            maxWidth: '70%',
            textAlign: 'center',
            color: '#cccccc',
          }}
        >
          프론트엔드 개발과 관련된 다양한 지식과 경험을 공유하는 블로그입니다.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
