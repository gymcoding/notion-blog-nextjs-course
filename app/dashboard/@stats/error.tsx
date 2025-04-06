'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅 서비스에 에러 전송
    console.error(error);
  }, [error]);

  return (
    <div className="bg-destructive/15 rounded-lg p-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">문제가 발생했습니다</h2>
        <p className="text-muted-foreground text-sm">
          일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>
        <button
          onClick={reset}
          className="bg-primary text-primary-foreground self-start rounded-md px-4 py-2 text-sm"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
