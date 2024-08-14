import React from "react";
import { paymentData } from "../../constants/payments";
import { TPayment } from "../../types/payment";
import { studentIcons } from "../../assets/icons/students/index";
import view from "../../assets/icons/payment/view.svg";
import styles from "./styles.module.scss";
import { Table, Image } from "antd";
import type { TableColumnsType, TableProps } from "antd";

const columns: TableColumnsType<TPayment> = [
  {
    title: "Name",
    dataIndex: "name",
    width:100
  },
  {
    title: "Payment Schedule",
    dataIndex: "paymentSchedule",
    width: 100,

    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Bill Number",
    dataIndex: "billNumber",
    width: 100,
  },
  {
    title: "Amount",
    width: 150,
    dataIndex: "amount",
  },
  {
    title: "Balance",
    width: 150,
    dataIndex: "balance",
  },
  {
    title: "Date",
    dataIndex: "date",
    width: 100,
  },
  {
    title: "",
    dataIndex: "",
    width:60,
    render: () => (
      <div className={styles.edit}>
        <img src={view} alt="" />
      </div>
    ),
  },
];

const onChange: TableProps<TPayment>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

function PaymentTable() {
  return (
    <div className={styles.content}>
      <div className={styles.functionBar}>
        <p>Payment Details</p>
        <div className={styles.functionBlock}>
          <img src={studentIcons.sort} alt="sort" />
        </div>
      </div>
      <hr />
      <div className={styles.contentList}>
        <Table
          columns={columns}
          dataSource={paymentData}
          pagination={{ pageSize: 6 }}
          scroll={{ x: 760 }}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </div>
  );
}

export default PaymentTable;

// <div className = {styles.paymentTable}>
//   <table>
//     <tr className = {styles.attributeBar}>
//       <th>Name</th>
//       <th>Payment Schedule</th>
//       <th>Bill Number</th>
//       <th>Amount Paid</th>
//       <th>Balance amount</th>
//       <th>Date</th>
//       <th></th>
//     </tr>
//     {paymentData.map((payment) => {
//         return(
//         <tr className = {styles.paymentInformation}>
//             <td>{payment.name}</td>
//             <td>{payment.paymentSchedule}</td>
//             <td>{payment.billNumber}</td>
//             <td>{payment.amount}</td>
//             <td>{payment.balance}</td>
//             <td>{payment.date}</td>
//             <td><img src={view} alt="edit" /></td>
//         </tr>
//     )})}
//   </table>
// </div>
