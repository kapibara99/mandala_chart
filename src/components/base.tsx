export default function Base({ children }: { children: React.ReactNode }) {
  return <div className="w-full min-h-screen bg-green-100 relative overflow-hidden">{children}</div>;
}
