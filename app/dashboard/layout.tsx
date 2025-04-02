import { Card } from '@/components/ui/card';

export default function DashboardLayout({
  children,
  stats,
  posts,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  posts: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex flex-col gap-8 py-8">
        <div>
          <Card className="p-6">{children}</Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="h-[400px] overflow-auto p-6">{stats}</Card>
          <Card className="h-[400px] overflow-auto p-6">{posts}</Card>
        </div>
      </div>
    </div>
  );
}
