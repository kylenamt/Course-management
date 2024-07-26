import React from 'react'
import {paymentData} from '../../constants/payments'
import {studentIcons} from '../../assets/icons/students/index'
import view from '../../assets/icons/payment/view.svg'
import styles from "./styles.module.scss";
function PaymentTable() {
  return (
    <div className = {styles.content}>
          <div className = {styles.functionBar}>
            <p>Payment Details</p>
            <div className = {styles.functionBlock}>
              <img src={studentIcons.sort} alt="sort" />
            </div>
          </div>
          <hr />
          <div className = {styles.contentList}>
            <div className = {styles.paymentTable}>
              <table>
                <tr className = {styles.attributeBar}>
                  <th>Name</th>
                  <th>Payment Schedule</th>
                  <th>Bill Number</th>
                  <th>Amount Paid</th>
                  <th>Balance amount</th>
                  <th>Date</th>
                  <th></th>
                </tr>
                {paymentData.map((payment) => {
                    return(
                    <tr className = {styles.paymentInformation}>
                        <td>{payment.name}</td>
                        <td>{payment.paymentSchedule}</td>
                        <td>{payment.billNumber}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.balance}</td>
                        <td>{payment.date}</td>
                        <td><img src={view} alt="edit" /></td>
                    </tr>
                )})}
              </table>
            </div>
          </div>
        </div>
  )
}

export default PaymentTable