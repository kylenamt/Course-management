import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { studentIcons } from "../../assets/icons/students";
import { TStudent } from "../../types/student";
// import { studentData } from "../../constants/student";
import { getStudentData } from "../../api/misc";
import { Table, Image } from "antd";
import type { TableColumnsType, TableProps } from "antd";

// function processStudentData() {
//   const fetchedStudentData = await getStudentData();
//   return fetchedStudentData
// }
// const data: TStudent[] = getStudentData().
const columns: TableColumnsType<TStudent> = [
  {
    title: "",
    dataIndex: "avatar",
    width: 100,
    render: (src) => {
      return (
        <Image
          src={src}
          style={{
            height: "55px",
            width: "65px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      );
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 100,
  },
  {
    title: "Email",
    dataIndex: "email",
    width: 200,

    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    width: 120,
  },
  {
    title: "Enroll number",
    width: 200,
    dataIndex: "enrollNumber",
  },
  {
    title: "Date of Admission",
    width: 150,
    dataIndex: "dateOfAdmission",
  },
  {
    title: "",
    dataIndex: "id",
    width: 200,
    render: () => (
      <div className={styles.edit}>
        <img src={studentIcons.edit} alt="" />
        <img src={studentIcons.deletes} alt="" />
      </div>
    ),
  },
];
// const data = getStudentData()
const onChange: TableProps<TStudent>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

function StudentPage() {
  const [studentData, setStudentData] = useState<TStudent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStudentData();
      setStudentData(data);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.content}>
      <div className={styles.functionBar}>
        <p>Students List</p>
        <div className={styles.functionBlock}>
          <img src={studentIcons.sort} alt="" />
          <button>ADD NEW STUDENT</button>
        </div>
      </div>
      <hr />
      <div className={styles.contentList}>
        <div className={styles.studentTable}>
          <Table
            columns={columns}
            dataSource={studentData}
            onChange={onChange}
            pagination={{ pageSize: 6 }}
            scroll={{ x: 900 }}
            showSorterTooltip={{ target: "sorter-icon" }}
          />
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
