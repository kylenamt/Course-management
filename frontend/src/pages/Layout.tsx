
import Sidebar from "../components/Sidebar";
import styles from "./styles.module.scss";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { toggleSideBar,SideBarState } from "../contexts/toggleMenu.context";
import { useContext } from "react";


export default function Layout() {
  const isOpen = useContext<toggleSideBar>(SideBarState)
  return (
    <div className={styles.wrapper}>
      <div className={isOpen.state ? styles.open : styles.close} id={styles.buttonContainer} onClick={isOpen.toggle}>
        <div
          className={isOpen.state ? styles.open : styles.close}
          id={styles.menuButton}
        >
          <span id="_1"></span>
          <span id="_2"></span>
          <span id="_3"></span>
        </div>
      </div>
      <Sidebar />
      <div id = {styles.mainPage} className = {isOpen.state?styles.open:styles.close} >
        <Navbar />
        <Outlet/>
      </div>
    </div>
  );
}
