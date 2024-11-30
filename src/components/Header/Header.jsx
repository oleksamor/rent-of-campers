import { NavLink } from "react-router-dom";

import logo from "../../images/hero/logoTravelCamps.png";
import css from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <NavLink to="/">
        <img className={css.logo} src={logo} alt="logo" />
      </NavLink>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <NavLink
              className={({ isActive }) =>
                `${css.link} ${isActive && css.active}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.listItem}>
            <NavLink
              className={({ isActive }) =>
                `${css.link} ${isActive && css.active}`
              }
              to="/campers"
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
