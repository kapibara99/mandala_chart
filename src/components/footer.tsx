import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="w-full text-center mt-10">
      <NavLink to="kiyaku">利用規約</NavLink>
      <p>Copyright &copy; {`${new Date().getFullYear()}`} kapy</p>
    </footer>
  );
}
