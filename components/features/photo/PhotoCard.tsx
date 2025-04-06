import { Card } from '@/components/ui/card';
export default function PhotoCard({ id, modal }: { id: string; modal?: boolean }) {
  return (
    <Card className="flex aspect-square w-sm items-center justify-center">
      <h1 className="text-2xl font-bold">
        Photo {id}, {modal ? 'modal' : 'card'}
      </h1>
    </Card>
  );
}
