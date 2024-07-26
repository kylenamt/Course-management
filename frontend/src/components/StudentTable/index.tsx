import React from 'react'
import styles from "./styles.module.scss";
import { studentIcons } from '../../assets/icons/students';
import { studentData } from '../../constants/student';


function StudentTable() {
  return (
    <div className = {styles.content}>
          <div className = {styles.functionBar}>
            <p>Students List</p>
            <div className = {styles.functionBlock}>
              <img src={studentIcons.sort} alt="" />
              <button>ADD NEW STUDENT</button>
            </div>
          </div>
          <hr />
          <div className = {styles.contentList}>
            <div className = {styles.studentTable}>
              <table>
                <tr className = {styles.attributeBar}>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Enroll Number</th>
                  <th>Date of Admission</th>
                  <th></th>
                  <th></th>
                </tr>
                {
                  studentData.map((student) => {
                    return (
                      <tr className = {styles.studentInformation}>
                        <td><div className ={styles.studentPicture}>
                      <img
                        src={student.avatar}
                        alt="student"
                      />
                    </div></td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>{student.enrollNumber}</td>
                        <td>{student.dateOfAdmission}</td>
                        <td><img src={studentIcons.edit} alt="" /></td>
                        <td><img src={studentIcons.deletes} alt="" /></td>
                      </tr>
                    )})
                } 
              </table>
            </div>
          </div>
        </div>
  )
}

export default StudentTable