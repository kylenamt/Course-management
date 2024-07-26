import { contentIcons } from "../assets/icons/content";
export interface TCardInfo {
    id:number,
    title:string,
    icon:string,
    statistics:number,
    unit?:string,
    className?:string
}
export const cards:TCardInfo[] = [
    {
        id:1,
        title:"Students",
        icon:contentIcons.graduationcap,
        statistics: 243,
    },
    {
        id:2,
        title:"Courses",
        icon:contentIcons.bookmark,
        statistics: 13,
    },
    {
        id:3,
        title:"Payment",
        icon:contentIcons.usd,
        statistics: 556000,
        unit:"INR"
    },
    {
        id:4,
        title:"Users",
        icon:contentIcons.person,
        statistics: 3,
    }
  ];
  