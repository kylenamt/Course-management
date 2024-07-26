import React, { useContext } from "react";
import { toggleSideBar, SideBarState } from "../../contexts/toggleMenu.context";
import styles from "./styles.module.scss";
import { navbarIcons } from "../../assets/icons/navbar";

function Navbar() {
  const isOpen = useContext<toggleSideBar>(SideBarState);
  return (
    <div id={styles.navBar}>
      <img
            id={styles.toggleButton}
            className = {isOpen.state?styles.open:styles.close}
            src={navbarIcons.returnIcon}
            alt = ""
            onClick = {isOpen.toggle}
          />
      <div className={styles.navBar_right}>
        <div className={styles.textfield}>
          <input type="text" placeholder="Search..." />
          <img src={navbarIcons.search} alt="" />
        </div>
        <img src={navbarIcons.notification} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
