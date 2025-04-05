import { Card } from '@/components/ui/card';

interface PhotoPageProps {
  params: Promise<{ id: string }>;
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  return (
    <div className="container flex justify-center py-8">
      <Card className="flex aspect-square w-sm items-center justify-center">
        <h1 className="text-2xl font-bold">Photo {id}</h1>
      </Card>
    </div>
  );
}
