import { ImageResponse } from 'next/og';

// 이미지 크기 - 32×32px와 16×16px 아이콘 생성
export const size = {
  width: 32,
  height: 32,
};

// 이미지 생성 함수
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
        }}
      >
        G
      </div>
    ),
    {
      ...size,
    }
  );
}
