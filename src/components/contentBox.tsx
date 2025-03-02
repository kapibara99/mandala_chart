export default function ContentBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-4/5 mt-10 m-auto p-10 bg-white shadow-sm relative z-1">{children}</div>
  );
}
