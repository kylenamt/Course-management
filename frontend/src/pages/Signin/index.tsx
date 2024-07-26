import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

function Signin() {
  return (
    <div className = {styles.signInWrapper}>
      <div className = {styles.signIn_Form}>
        <div className = {styles.headingContainer}>
          <h1 className = {styles.signIn_title}>CRUD OPERATIONS</h1>
          <h1 className = {styles.signIn_msg1}>SIGN IN</h1>
          <h2 className = {styles.signIn_msg2}>
            Enter your credentials to access your account
          </h2>
        </div>
        <div className = {styles.signIn_input}>
          <label>Email</label>
          <input className = {styles.textfield} type="text" placeholder="Enter your email" />
        </div>
        <div className = {styles.signIn_input}>
          <label>Password</label>
          <input
            className = {styles.textfield}
            type="text"
            placeholder="Enter your password"
          />
        </div>
        <NavLink className = {styles.signIn_button} to="/dashboard">SIGN IN</NavLink>
        <div className = {styles.signIn_resetPassword}>
          <label> Forgot your password?</label>
          <a href="https://github.com/" className = {styles.resetRedirect}>Reset Password</a>
        </div>
      </div>
    </div>
  )
}

export default Signin