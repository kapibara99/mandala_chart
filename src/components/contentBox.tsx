export default function ContentBox({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className="w-4/5 mt-10 m-auto pt-5 px-10 pb-8 bg-white shadow-sm relative z-1">
      <h2 className="text-2xl text-bold mb-5">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
