import { defaultWidthSize } from "../_commonStyle";

export default function ContentBox({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className={`${defaultWidthSize} mt-30 mx-10 py-10 px-20 bg-white shadow-md relative z-1`}>
      <h2 className="text-2xl font-bold mb-5">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
