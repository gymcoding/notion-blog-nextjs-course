import PhotoCard from '@/components/features/photo/PhotoCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
interface PhotoPageProps {
  params: Promise<{ id: string }>;
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Photo Card Dialog</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center p-8">
          <PhotoCard id={id} modal={true} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
