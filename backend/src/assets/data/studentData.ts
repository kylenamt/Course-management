import { TStudent } from '~/type'
// import avt from '../pictures/'

const studentData: TStudent[] = []

for (let i = 0; i < 20; i++) {
  studentData.push({
    id: i,
    avatar:
      'https://s3-alpha-sig.figma.com/img/7f02/c446/9c5672219055d43b0ffb2caf907f4b0d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YsPLdlW2vDajIHlGH721fvvUpvbBOb0QMKJ-nyx3N6XULyFyLKV0t2bEsm~xyG7sf~ctGcC7jRyByvMc5NxIwJAipE8ZKL9nSX5xO8hkANneqdof8CZQ8ssX2ZHhNCM2KfE0tG9uye2ljQenHgb0vk-~1bp7qF~oi98ShyGno-qkX7TejzDydAwBZ7MLQ336T5DycW4lFiamf-29UibRUSYo7xvEKylVUk7ENQgbYNXvIFarcKr23URLvP9ule89GmQW6VDA4GLNk2um4xEw~NfGL2uTxZ8wZzc2Y-0flrri8SPiIO1Gcowz7-boEMIqOuVnsGHCAnfBUrxPFO47Fw__',
    name: 'Karthi' + i,
    email: 'karthi@gmmail.com',
    phone: '7305477760',
    enrollNumber: '1234567305477760',
    dateOfAdmission: '08-Dec, 2021'
  })
}
export { studentData }
