import { sideBarIcons } from "../assets/icons/sidebar";

type menuProp = {
  name: string;
  link: string;
  icon: string;
};
export const menuConst: menuProp[] = [
  { name: "Home", link: "/x", icon: sideBarIcons.home },
  { name: "Course", link: "dashboard", icon: sideBarIcons.bookmark },
  { name: "Students", link: "students", icon: sideBarIcons.graduationcap },
  { name: "Payment", link: "payment", icon: sideBarIcons.usd },
  { name: "Report", link: "/xx", icon: sideBarIcons.report },
  { name: "Setting", link: "/xxx", icon: sideBarIcons.setting },
];