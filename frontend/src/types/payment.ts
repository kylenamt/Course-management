export type TPayment = {
   name:string
   paymentSchedule:string
   billNumber: string
   amount: string
   balance: string
   date: string
} 
let paymentData:TPayment[] = [];
for(let i = 0; i < 20; i++) {
  paymentData.push({
  name: "Karthi" + i,
  paymentSchedule: "Monthly",
  billNumber: "1234567305477760",
  amount: "1000",
  balance: "500",
  date: "08-Dec, 2021"
})
}