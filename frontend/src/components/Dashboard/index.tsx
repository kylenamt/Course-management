import React from "react";
import styles from "./styles.module.scss";
import {cards } from "../../constants/cardInfo";
import InfoCard from "../InfoCard/index";
// import className from "classnames/bind";

// const cx = className.bind(styles);

function DashboardCard() {
  return (
    <div className={styles.content}>
          <div className={styles.contentMenu}>
            {cards.map(({id,title,icon,statistics,unit}) =>
               <InfoCard  
                id = {id} icon = {icon} title={title} statistics = {statistics} unit = {unit}/>)}
          </div>
        </div>
  );
}
export default DashboardCard;