'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col items-center gap-4 text-center">
        <div className="text-muted-foreground text-6xl font-bold">500</div>
        <h1 className="text-2xl font-semibold tracking-tight">오류가 발생했습니다</h1>
        <p className="text-muted-foreground">오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="mt-4"
        >
          다시 시도
        </Button>
      </div>
    </div>
  );
}
