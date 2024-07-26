import { TPayment } from "../types/payment";

let paymentData: TPayment[] = [];
for (let i = 0; i < 20; i++) {
  paymentData.push({
    name: "Karthi" + i,
    paymentSchedule: "Monthly",
    billNumber: "00012223",
    amount: "INR 35,000	",
    balance: "INR 55,000",
    date: "08-Dec, 2021"
  })
}
export { paymentData }