import PhotoCard from '@/components/features/photo/PhotoCard';
interface PhotoPageProps {
  params: Promise<{ id: string }>;
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  return (
    <div className="container flex justify-center py-8">
      <PhotoCard id={id} />
    </div>
  );
}
