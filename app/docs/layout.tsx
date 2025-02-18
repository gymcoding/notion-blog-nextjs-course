export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">{children}</div>
    </div>
  );
}
