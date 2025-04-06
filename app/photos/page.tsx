import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function PhotosPage() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 10 }, (_, i) => (
          <Link href={`/photos/${i + 1}`} key={i}>
            <Card key={i} className="flex aspect-square items-center justify-center">
              <h1 className="text-2xl font-bold">Photo {i + 1}</h1>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
