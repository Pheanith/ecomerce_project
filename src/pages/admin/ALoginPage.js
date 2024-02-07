import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import style from "./ALoginPage.module.css";
import {request} from "../../components/request/request"
const ALoginPage = () => {

  const onFinish = async (values) => {
    var param = {
      "tel" : values.username,
      "password" : values.password
    }
    const res = await request("employee/login","post",param)

        // if username and password is corrected will login to MainLayout
        // how to compare data get from input with data in database
        if(res.isSuccess){
          // JSON.stringify(obj) convert json obj to string obj
          // JSON.parse(obj) convert string obj to obj json
          // use JSON. this part because localStorage does not allow store this type of data 
          
          localStorage.setItem("profile",JSON.stringify(res.profile)) // use for object json 
            // when login give it value 1 so it won't null
            localStorage.setItem("isLogin",'1')
            // link to another page with route
            window.location.href = "/admin"
        } else {
            message.warning(res.message)
        }
  };
  return (
    <div className={style.container}>
      <h1 className={style.txtLogin}>Login</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ALoginPage;

// import { useState } from "react"

// const ALoginPage = () => {

//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

//     const onLogin = () => {

//         const staticUsername = "Sa"
//         const staticPassword = "123"

//         // if username and password is corrected will login to MainLayout
//         // how to compare data get from input with data in database
//         if(username == staticUsername && password == staticPassword){
//             // when login give it value 1 so it won't null
//             localStorage.setItem("isLogin",'1')
//             // link to another page with route
//             window.location.href = "/admin"
//         } else {
//             alert("Wrong")
//         }

//     }

//     return (
//         <div>
//             <h2>LoginPage</h2>
//             <input
//                 placeholder="username"
//                 // how to get value from user input in js
//                 // store it temporary in setUsername
//                 onChange={(event)=>{
//                     setUsername(event.target.value)
//                 }}
//             />
//             <input
//                 placeholder="password"
//                 onChange={(event)=>{
//                     setPassword(event.target.value)
//                 }}
//             />
//             <br />
//             <button onClick={onLogin}>Login</button>
//             <button>Register</button>
//         </div>
//     );
// }
// export default ALoginPage;
