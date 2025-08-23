import { NavLink } from "react-router";
import styles from "./NavigationBar.module.css";

const appLinks = [
  { path: "/", content: "🏨 Home" },
  { path: "/spacecraft", content: "🚀 Spacecraft" },
  { path: "/planets", content: "🌎 Planets" },
];

function NavigationBar() {
  function setActive({ isActive }) {
    return isActive ? styles["navbar__item-active"] : "";
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {appLinks.map(({ path, content }, i) => (
          <li key={i} className={styles.navbar__item}>
            <NavLink className={setActive} to={path}>
              {content}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
