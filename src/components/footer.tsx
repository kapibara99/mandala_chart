import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="w-full text-center mt-30 py-10">
      <div className="flex justify-center gap-5 mb-2">
        <a href="https://forms.gle/Bcv8mHhJvipuBhd18" className="underline hover:text-attention" target="_blank" rel="noopener">
          お問い合わせ
        </a>
        <NavLink className="underline hover:text-attention" to="kiyaku">
          利用規約
        </NavLink>
      </div>

      <p>Copyright &copy; {`${new Date().getFullYear()}`} kapy</p>
    </footer>
  );
}
