export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-8">
      <div className="space-y-8">{children}</div>
    </div>
  );
}
