import {TStudent} from "../types/student"
import {avt} from "../assets/pictures/index"

let studentData:TStudent[] = [];

for(let i = 0; i < 20; i++) {
  studentData.push({
  id: i,
  avatar: avt.avatar1,
  name: "Karthi" + i,
  email: "karthi@gmmail.com",
  phone: "7305477760",
  enrollNumber: "1234567305477760",
  dateOfAdmission: "08-Dec, 2021"
})
}
export {studentData}