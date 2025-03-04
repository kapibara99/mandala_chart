import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="text-center p-4 shadow-sm">
      <h1 className="text-3xl font-bold text-base-strong">
        <NavLink to="/">MANDALA CHART GENERATOR</NavLink>
      </h1>
    </header>
  );
}
