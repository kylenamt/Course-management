import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { avt } from "../../assets/pictures/index";
import { sideBarIcons } from "../../assets/icons/sidebar";
import { Image} from "antd";
import { NavLink } from "react-router-dom";
import { menuConst } from "../../constants/sidebar";
import { SideBarState,toggleSideBar } from "../../contexts/toggleMenu.context";

const propUser1 = userInformationWindow(avt.avatar1, "Stan Edgar", "Admin");

function Sidebar() {
  const menuOptions = menuConst.map(({ name, link, icon }) =>
    menuOption(name, link, icon)
  );
  const isOpen = useContext<toggleSideBar>(SideBarState)

  return (
    <div id={styles.sideBar} className={isOpen.state?styles.open:styles.close}>
      
      <div className={styles.titleContainer}>
        <h1 className={styles.heading}>CRUD OPERATIONS</h1>
      </div>
      {propUser1}
      <div className={styles.pageMenu}>
        <div>
          {menuOptions}
        </div>
        <div>
          <NavLink
            className={`${styles.pageOptions} ${styles.last}`}
            id={"Logout"}
            to={"signin"}
            >
            <p>Logout</p>
            <img src={sideBarIcons.logout} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function userInformationWindow(avatar: string, name: string, role: string) {
  return (
    <div className={styles.userInfo}>
      <div className={styles.pictureFrame}>
        <Image className={styles.profilePicture} src={avatar} />
      </div>
      <p className={styles.userName}>{name}</p>
      <p className={styles.userRole}>{role}</p>
    </div>
  );
}

function menuOption(optionName: string, location: string, iconSource: string) {
  return (
    <NavLink
      className={({isActive}) =>isActive?`${styles.pageOptions} ${styles.active}`:styles.pageOptions}
      id={optionName}
      to={location}
    >
      <img src={iconSource} alt="" />
      <p>{optionName}</p>
    </NavLink>
  );
}

export default Sidebar;
