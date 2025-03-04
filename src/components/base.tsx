export default function Base({ children }: { children: React.ReactNode }) {
  return <div className="w-full min-h-screen bg-base text-base-font relative overflow-hidden font-main">{children}</div>;
}
