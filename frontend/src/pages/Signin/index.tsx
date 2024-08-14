import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import type { FormProps } from 'antd';
import { Checkbox, Form, Input } from "antd";
import { LoginType } from "../../types/login";
const onFinish: FormProps<LoginType>['onFinish'] = (values:any) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<LoginType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Signin() {
  return (
    <div className={styles.signInWrapper}>
      <div className={styles.signIn_Form}>
        <div className={styles.headingContainer}>
          <h1 className={styles.signIn_title}>CRUD OPERATIONS</h1>
          <h1 className={styles.signIn_msg1}>SIGN IN</h1>
          <h2 className={styles.signIn_msg2}>
            Enter your credentials to access your account
          </h2>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<LoginType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
            required = {false}
          >
            <Input
            placeholder="Enter your email"/>
          </Form.Item>

          <Form.Item<LoginType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            required = {false}

          >
            <Input.Password
            placeholder="Enter your password"
             />
          </Form.Item>

          <Form.Item<LoginType>
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
        <NavLink className={styles.signIn_button} to="/dashboard">
          SIGN IN
        </NavLink>
        <div className={styles.signIn_resetPassword}>
          <label> Forgot your password? </label>
          <a href="https://github.com/" className={styles.resetRedirect}>
            Reset Password
          </a>
        </div>
        {/* <hr/> */}
      </div>
    </div>
  );
}

export default Signin;
    /* <div className = {styles.signIn_input}>
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
        </div> */