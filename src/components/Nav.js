import css from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.listItem}>
          <Link to="/"
            className={location.pathname === "/" ? css.active : ""}>
            Home
          </Link>
        </li>
        <li className={css.listItem}>
          <Link
            to="/movies"
            className={location.pathname === "/movies" ? css.active : ""}>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
}
