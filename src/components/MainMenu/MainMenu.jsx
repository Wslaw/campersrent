import styles from "./main-menu.module.css";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";

const MainMenu = () => {
    
    return (
      <div className={styles.container}>
        <NavLink className={styles.logo} to="/">
          <Icon name="icon-camper1" className={styles.iconCamper} />
          <span className={styles.logoTitle}>CampersRent</span>
        </NavLink>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/">
              Home Page
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/favorites">
              Faforites
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.linkLogin} to="/sign-in">
              Log In
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.linkRegister} to="/sign-up">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default MainMenu;
